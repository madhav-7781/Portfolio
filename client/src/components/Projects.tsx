import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">PROJECTS</span>
          <h2 className="section-title">My Testing Projects</h2>
          <p className="section-subtitle">
            Explore my portfolio of QA testing projects showcasing my experience with different testing methodologies and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`${
                      project.date === "Completed" 
                        ? "bg-secondary/10 text-secondary" 
                        : "bg-primary/10 text-primary"
                    } text-xs px-2 py-1 rounded font-medium`}
                  >
                    {project.date}
                  </Badge>
                </div>
                
                <p className="text-neutral-600 mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {project.methodology && (
                    <>
                      <h4 className="font-medium text-neutral-800 mt-4">Testing Methods:</h4>
                      <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                        {project.methodology.map((method, index) => (
                          <li key={index}>{method}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.features && (
                    <>
                      <h4 className="font-medium text-neutral-800 mt-4">Key Features:</h4>
                      <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.outcome && (
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <h4 className="font-medium text-neutral-800">
                        {project.features ? "Implementation:" : "Outcome:"}
                      </h4>
                      <p className="text-neutral-600">
                        {project.outcome}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
