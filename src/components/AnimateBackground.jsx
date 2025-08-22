const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground