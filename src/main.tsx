import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Get the version parameter from the current URL (e.g., http://localhost:5173/?version=2)
const urlParams = new URLSearchParams(window.location.search);
const VERSION = urlParams.get('v') || '1'; // Default to '1' if parameter is missing
const LSV = parseInt(VERSION) - 1 || 1
const DEFAULT = 1
// 2. Tell Vite to map out all possible App components in your version folders
const apps = import.meta.glob('./v*/App.{tsx,jsx}');

// 3. Lazily load the correct file based on the URL parameter
const App = lazy(async () => {
  const targetPath = `./v${VERSION}/App.tsx`;
  const fallbackPath = `./v${LSV}/App.tsx`;

  const importFn = apps[targetPath] ?? apps[fallbackPath];

  if (!importFn) {
    // Fallback UI or error handling if an invalid version is passed in the URL
    console.error(`Version ${VERSION} not found. Falling back to less version : ${parseInt(VERSION) - 1}`);
    if (apps[`./v${VERSION}/App.tsx`]) {
      console.log(`Target Version Found : ${VERSION}`);
      return apps[`./v${VERSION}/App.tsx`]();
    } else {
      console.log(`Target & Fallback Both Version Not Found : ${VERSION} : ${LSV}`);
      return apps[`./v${DEFAULT}/App.tsx`]() 
    }
  }

  return importFn() as Promise<{ default: React.ComponentType<any> }>;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);