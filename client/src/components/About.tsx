import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

const About = () => {
  const { aboutExtended, contact } = portfolioData;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="section-badge">ABOUT ME</span>
            <h2 className="section-title">Quality Assurance Specialist</h2>
          </div>
          
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            {aboutExtended.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-10 bg-neutral-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="icon-circle">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Phone</p>
                  <p className="font-medium">{contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="icon-circle">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="font-medium">{contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="icon-circle">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p className="font-medium">{contact.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="icon-circle">
                  <FaLinkedin />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">LinkedIn</p>
                  <p className="font-medium">{contact.linkedin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
