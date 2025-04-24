import { Card, CardContent } from "@/components/ui/card";
import { FaCode, FaTools, FaClipboardCheck, FaCheckCircle } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  const { languageSkills, testingToolSkills, qaSkills } = portfolioData;

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">SKILLS</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            My technical skills and proficiency in various testing tools and programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-neutral-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaCode />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Programming Languages</h3>
              </div>
              
              <div className="space-y-5">
                {languageSkills.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-neutral-800">{language.name}</span>
                      <span className="text-sm text-neutral-500">{language.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${language.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Testing Tools */}
          <Card className="bg-neutral-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <FaTools />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Testing Tools</h3>
              </div>
              
              <div className="space-y-5">
                {testingToolSkills.map((tool, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-neutral-800">{tool.name}</span>
                      <span className="text-sm text-neutral-500">{tool.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${tool.percentage}%`,
                          backgroundColor: "hsl(var(--secondary))"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* QA Skills */}
          <Card className="bg-neutral-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FaClipboardCheck />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">QA Expertise</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {qaSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                    <div className="text-primary">
                      <FaCheckCircle />
                    </div>
                    <span className="text-neutral-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
