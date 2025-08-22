const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">Shiva</span>
            <span className="text-emerald-400 font-bold text-xl">.dev</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Shiva. Crafted with <span className="text-red-400">♥</span> and <span className="text-emerald-400">code</span>.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer