import { ShieldCheck, BookOpenCheck, MonitorSmartphone } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transform hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-orange-500" size={28} />
              <h3 className="text-xl font-semibold text-orange-400">
                Shariah Compliance
              </h3>
            </div>
            <p className="text-gray-300">
              Ensure that your financial products and services adhere to Islamic
              principles.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transform hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BookOpenCheck className="text-orange-500" size={28} />
              <h3 className="text-xl font-semibold text-orange-400">
                Expert Guidance
              </h3>
            </div>
            <p className="text-gray-300">
              Get expert advice on structuring and validating Islamic finance
              products.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transform hover:scale-105 hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <MonitorSmartphone className="text-orange-500" size={28} />
              <h3 className="text-xl font-semibold text-orange-400">
                User-Friendly Interface
              </h3>
            </div>
            <p className="text-gray-300">
              Navigate our intuitive platform easily—even without prior
              knowledge of Islamic finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
