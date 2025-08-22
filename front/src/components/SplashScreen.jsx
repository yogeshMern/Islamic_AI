const SplashScreen = () => {
  return (
    <div
      id="splash"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white transition-opacity duration-1000"
    >
      {/* Spinner */}
      <div className="mb-6 animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-50"></div>

      {/* Branding */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500 tracking-wide animate-pulse mb-2">
        Islamic Finance GPT Assistant
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 text-sm md:text-base tracking-wider animate-fade-in">
        Powered by AI • Rooted in Shariah
      </p>
    </div>
  );
};

export default SplashScreen;
