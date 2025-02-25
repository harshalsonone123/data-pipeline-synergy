
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import SkillChip from "../components/SkillChip";
import ResponsibilityCard from "../components/ResponsibilityCard";

const Index = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    "iOS Development", "Android Development", "React Native", "UI/UX Design",
    "API Integration", "App Security", "Performance Optimization", "Cross-Platform Development",
    "Mobile Testing", "Version Control", "App Store Deployment", "Payment APIs"
  ];

  const responsibilities = [
    "Develop and maintain mobile applications for iOS and Android platforms",
    "Collaborate with designers and product managers on user experience",
    "Optimize app performance across different devices",
    "Implement security best practices and data protection",
    "Integrate third-party APIs and payment systems",
    "Debug and troubleshoot application issues",
    "Ensure cross-platform compatibility and responsiveness",
    "Handle app store submission processes",
    "Work with backend teams on API integration"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-24 bg-white border-b border-gray-100"
      >
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="px-3 py-1 text-sm font-medium bg-primary rounded-full">
                Now Hiring
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Mobile App Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Join our team to build an innovative cross-platform finance mobile application
            </motion.p>
          </div>
        </div>
      </motion.header>

      <main className="container max-w-4xl mx-auto px-6 py-16 space-y-24">
        <section
          ref={(el: HTMLDivElement | null) => sectionRefs.current[0] = el}
          className="section-fade"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Required Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillChip key={skill} skill={skill} index={index} />
            ))}
          </div>
        </section>

        <section
          ref={(el: HTMLDivElement | null) => sectionRefs.current[1] = el}
          className="section-fade"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Responsibilities</h2>
          <div className="grid gap-6">
            {responsibilities.map((responsibility, index) => (
              <ResponsibilityCard
                key={index}
                responsibility={responsibility}
                index={index}
              />
            ))}
          </div>
        </section>

        <section
          ref={(el: HTMLDivElement | null) => sectionRefs.current[2] = el}
          className="section-fade"
        >
          <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Required Experience</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Proven experience in mobile app development for iOS and Android
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Strong background in UI/UX design principles
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Experience with payment API integration
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Knowledge of app store submission processes
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Familiarity with mobile security best practices
              </li>
            </ul>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
            Apply Now
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
