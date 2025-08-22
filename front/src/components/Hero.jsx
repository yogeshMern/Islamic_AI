import { Link } from "react-router-dom";
import { Info, Sparkles } from "lucide-react";
import Note from "./Note";
import { useState } from "react";

const Hero = () => {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  return (
    <>
      <Note isOpen={isNoteOpen} onClose={() => setIsNoteOpen(false)} />
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-orange-500" size={28} />
            <div className="flex items-center gap-2">
              <span className="text-sm uppercase tracking-widest text-orange-400 font-medium">
                Shariah-Compliant AI Advisor
              </span>
              <Info
                className="text-white w-6 h-6 cursor-pointer hover:text-orange-400 transition-colors"
                onClick={() => setIsNoteOpen(true)}
                title="Info"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Unlock the Power of Islamic Finance
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Get expert guidance on Islamic finance products and services with
            our GPT assistant.
          </p>

          <Link to="/learn-more">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
