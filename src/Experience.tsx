import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceTimeline = ({ experiences }: Record<string, any>) => {
  return (
    <section className="py-20 bg-gray-900/60" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Professional Experience
        </h2>

        {/* ---------- DESKTOP / TABLET VIEW (>= md:768px) ---------- */}
        <div className="hidden md:block relative max-w-10xl mx-auto">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 to-blue-500"></div>

          {experiences.map((exp: any, index: number) => {
            const isEven = index % 2 === 0; // even = right, odd = left
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative -mb-30 flex"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-green-400 flex items-center justify-center shadow-lg shadow-green-400/30">
                    <Briefcase className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                {/* Left column (odd) */}
                {!isEven && (
                  <div className="w-1/2 pr-16 flex justify-end">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-green-400/30 transition-all w-11/12"
                    >
                      <h3 className="text-2xl font-semibold text-green-400">
                        {exp.company}
                      </h3>
                      <p className="text-gray-400 font-mono mb-1">{exp.period}</p>
                      <p className="text-xl mb-4 text-gray-200 font-medium">{exp.position}</p>
                      <ul className="list-disc text-gray-400 mb-6 list-inside space-y-2">
                        {exp.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string, i: number) => (
                          <span key={i} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Right column (even) */}
                {isEven && (
                  <div className="w-1/2 pl-16 ml-auto">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-green-400/30 transition-all w-11/12"
                    >
                      <h3 className="text-2xl font-semibold text-green-400">{exp.company}</h3>
                      <p className="text-gray-400 font-mono mb-1">{exp.period}</p>
                      <p className="text-xl mb-4 text-gray-200 font-medium">{exp.position}</p>
                      <ul className="list-disc text-gray-400 mb-6 list-inside space-y-2">
                        {exp.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string, i: number) => (
                          <span key={i} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ---------- MOBILE VIEW (< md:768px) ---------- */}
        <div className="block md:hidden max-w-3xl mx-auto">
          {experiences.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-green-400/20 transition-all">
                <h3 className="text-2xl font-semibold text-green-400">
                  {exp.company}
                </h3>
                <p className="text-gray-400 font-mono mb-1">{exp.period}</p>
                <p className="text-xl mb-4 text-gray-200 font-medium">{exp.position}</p>
                <ul className="list-disc text-gray-400 mb-6 list-inside space-y-2">
                  {exp.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string, i: number) => (
                    <span key={i} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
