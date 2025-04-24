import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import { scrollToElement } from "@/lib/utils";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { name, title, about, location, contact } = portfolioData;

  const handleContactClick = () => {
    scrollToElement("contact");
  };

  const handleProjectsClick = () => {
    scrollToElement("projects");
  };

  return (
    <section id="home" className="py-20 bg-gradient-to-br from-white to-neutral-100">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/5 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            Hi, I'm <span className="text-primary">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mt-2 text-neutral-700">
            {title}
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            {about}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
            >
              Get in Touch
            </Button>
            <Button 
              onClick={handleProjectsClick}
              variant="outline" 
              className="bg-white hover:bg-neutral-200 text-neutral-800 px-6 py-3 border border-neutral-300"
            >
              View Projects
            </Button>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={`https://www.linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-primary transition">
              <FaLinkedin size={24} />
            </a>
            <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-primary transition">
              <FaGithub size={24} />
            </a>
            <a href={`mailto:${contact.email}`} className="text-neutral-700 hover:text-primary transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-2/5 mb-8 md:mb-0 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/images/mahika_profile.jpg"
                alt="Mahika Malyan" 
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2 shadow-md">
              <p className="font-medium text-primary flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {location.split(" ").slice(0, 2).join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
