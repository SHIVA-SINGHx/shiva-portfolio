import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Full Stack Developer",
    "Django Specialist",
    "Cloud Enthusiast",
    "DevOps Explorer",
  ];

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentText];

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        setCurrentText((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentText, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 text-emerald-400 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Available for Freelance Projects</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Shiva
              </span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 h-16 flex items-center justify-center">
              <span className="font-mono">{displayText}</span>
              <span className="ml-1 animate-pulse text-emerald-400">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional Full Stack Developer specializing in{" "}
            <span className="text-emerald-400">Django</span> backend
            development, exploring the realms of{" "}
            <span className="text-blue-400">Cloud</span> and{" "}
            <span className="text-purple-400">DevOps</span>. Ready to bring your
            ideas to life with cutting-edge solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="group bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-full transition-all duration-300 font-semibold uppercase tracking-wider transform hover:scale-105 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </a>
            <a
              href="#contact"
              className="border border-gray-700 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 px-8 py-4 rounded-full transition-all duration-300 font-semibold uppercase tracking-wider transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
