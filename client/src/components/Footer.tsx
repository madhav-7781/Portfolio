import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const { name, title, contact } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="mt-2 text-neutral-400">{title}</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href={`https://www.linkedin.com/in/${contact.linkedin}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-white transition"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href={`https://github.com/${contact.github}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={`mailto:${contact.email}`}
              className="text-neutral-400 hover:text-white transition"
              aria-label="Send Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
          
          <div>
            <Button variant="outline" className="bg-white text-neutral-900 hover:bg-neutral-200 flex items-center gap-2">
              <FaDownload size={16} />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400">&copy; {year} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
