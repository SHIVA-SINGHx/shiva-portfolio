import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">Shiva</span>
            <span className="text-emerald-400 ml-1">.dev</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wider transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header