import { Briefcase } from 'lucide-react';

const ExperienceTimeline = ({ experiences }: Record<string, any>) => {
  return (
    <section className="py-20 bg-gray-900 bg-opacity-50" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Professional Experience
        </h2>

        {/* Timeline - Increased max width to allow more content space */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline center line - centered on desktop, left-aligned on mobile */}
          <div className="absolute md:left-1/2 left-6 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500 timeline-line"></div>

          {experiences.map((exp: any, index: any) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-5">
                {/* Timeline dot - centered on desktop, left-aligned on mobile */}
                <div className="absolute md:left-1/2 left-6 md:transform md:-translate-x-1/2 top-10 z-10">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-green-400 flex items-center justify-center shadow-lg shadow-green-400/30">
                    <Briefcase className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Left side - visible only on desktop for even items */}
                  <div
                    className={`md:w-1/2 ${
                      isEven ? 'md:pr-16' : 'md:pr-16 md:order-1'
                    } mb-8 md:mb-0 hidden md:block`}
                  >
                    {isEven ? (
                      <div className="bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 float-right w-full ">
                        <h3 className="text-2xl font-semibold text-green-400">
                          {exp.company}
                        </h3>
                        <p className="text-gray-400 font-mono mb-2 ">
                          {exp.period}
                        </p>
                        <p className="text-xl mb-4 text-gray-300 ">
                          {exp.position}
                        </p>
                        <ul className="list-disc text-gray-400 mb-6 list-inside ml-0 ">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="">
                              {resp}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 justify-start">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-green-500 bg-opacity-10 text-green-400 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Right side - visible on desktop for odd items, and for all items on mobile */}
                  <div
                    className={`md:w-1/2 w-full ${
                      isEven
                        ? 'md:pl-16 md:order-2 pl-16'
                        : 'md:pl-16 md:order-2 pl-16'
                    }`}
                  >
                    {/* For mobile: All content shows on right side */}
                    <div
                      className={`bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 w-full 
                                ${!isEven ? 'md:block' : 'md:hidden block'}`}
                    >
                      <h3 className="text-2xl font-semibold text-green-400">
                        {exp.company}
                      </h3>
                      <p className="text-gray-400 font-mono mb-2">
                        {exp.period}
                      </p>
                      <p className="text-xl mb-4 text-gray-300">
                        {exp.position}
                      </p>
                      <ul className="list-disc text-gray-400 mb-6 list-inside">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-green-500 bg-opacity-10 text-green-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Extra padding at the bottom to ensure last timeline item has space for scrolling */}
          <div className="h-32"></div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 24px;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;
