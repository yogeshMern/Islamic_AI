import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const splash = document.getElementById("splash");
      if (splash) {
        splash.classList.add("opacity-0"); // fade out
        setTimeout(() => setShowSplash(false), 1000); // remove after fade
      }
    }, 1000); // wait 1 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
