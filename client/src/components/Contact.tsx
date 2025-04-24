import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { validateEmail } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { contact } = portfolioData;
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, we would send the form data to the server
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">CONTACT</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaboration opportunities or if you have any questions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card className="bg-neutral-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="icon-circle">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">Phone</h3>
                    <p className="text-neutral-600">{contact.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="icon-circle">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">Email</h3>
                    <p className="text-neutral-600">{contact.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="icon-circle">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">Location</h3>
                    <p className="text-neutral-600">{contact.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-50">
              <CardContent className="p-6">
                <h3 className="font-medium text-neutral-900 mb-4">Social Profiles</h3>
                <div className="flex gap-4">
                  <a 
                    href={`https://www.linkedin.com/in/${contact.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-90 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href={`https://github.com/${contact.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:opacity-90 transition"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="w-10 h-10 rounded-full bg-[#EA4335] flex items-center justify-center text-white hover:opacity-90 transition"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="md:col-span-2 bg-neutral-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full ${errors.name ? 'border-red-500' : 'border-neutral-300'}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-neutral-700 mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full ${errors.subject ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-neutral-700 mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full resize-none ${errors.message ? 'border-red-500' : 'border-neutral-300'}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="flex items-center justify-center gap-2 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane className="mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
