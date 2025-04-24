import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [, setLocation] = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = () => {
    // Set sticky header
    setIsSticky(window.scrollY > 10);

    // Highlight active navigation based on scroll position
    const sections = document.querySelectorAll("section[id]");
    let currentActive = "home";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionId = section.getAttribute("id") || "";
      
      if (sectionTop <= 100) {
        currentActive = sectionId;
      }
    });

    setActiveSection(currentActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToElement(id);
    closeMenu();
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isSticky ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Mahika</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`font-medium hover:text-primary transition ${
                activeSection === item.href.substring(1) ? "text-primary" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Resume Download Button */}
        <Button variant="default" className="hidden md:flex items-center gap-2">
          <Download size={16} />
          Download CV
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-neutral-800"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white px-4 py-2 shadow-inner transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`font-medium hover:text-primary transition py-2 ${
                activeSection === item.href.substring(1) ? "text-primary" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button variant="default" className="flex items-center justify-center gap-2 mt-2">
            <Download size={16} />
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
