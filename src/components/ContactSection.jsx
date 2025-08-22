import { X } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'shivasingh.1dev@gmail.com',
      href: 'shivasingh.1dev@gmail.com'
    },
    {
      icon: <X className="w-6 h-6" />,
      label: 'X',
      value: 'https://x.com/Shivatwd1',
      href: 'https://x.com/Shivatwd1'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/shiva-dev',
      href: 'https://github.com/shiva-dev'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shiva-dev',
      href: 'https://linkedin.com/in/shiva-dev'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex items-center space-x-4 p-4 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{contact.label}</h4>
                    <p className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <h4 className="text-emerald-400 font-semibold">Currently Available</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Open for freelance projects and remote full-time opportunities.
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection