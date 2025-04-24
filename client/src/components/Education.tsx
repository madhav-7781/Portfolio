import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaMapMarkerAlt, FaCertificate } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

const Education = () => {
  const { education, certificates } = portfolioData;

  return (
    <section id="education" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">EDUCATION</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My educational qualifications and certifications in computer science and testing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900">{edu.degree}</h3>
                        <h4 className="text-lg text-primary font-medium">{edu.institution}</h4>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-neutral-600">
                      {edu.description}
                    </p>
                    <p className="text-neutral-600 mt-2 flex items-center">
                      <FaMapMarkerAlt className="text-primary mr-2" />
                      {edu.location}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <Card key={cert.id} className="bg-white hover:shadow-md transition group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-4">
                        <div className="text-primary text-2xl">
                          <FaCertificate />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition">
                            {cert.title}
                          </h4>
                          <p className="text-neutral-600">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="text-sm text-neutral-500">{cert.date}</span>
                    </div>
                    <p className="text-neutral-600 pl-12">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
