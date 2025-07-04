 import { ArrowRight } from 'lucide-react';
 import {Link} from "react-router";

const HeroSection = () => {
  return (
    <section className="relative sm:h-screen bottom-[65px] overflow-clip smm:h-[40dvh] h-[30dvh] sm:h-dvh ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat smm:h-[40dvh] h-[30dvh] sm:h-dvh"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(251, 146, 60, 0.8), rgba(249, 115, 22, 0.6)), url('https://res.cloudinary.com/drpk19jdm/image/upload/v1751247759/Untitled_design_2_cx2plu.png')`
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10  flex items-center w-[436px] scale-40 bottom-[80px] left-[40px]  h-[calc] bottom-[40px] smm:w-full smm:h-full  smm:h-full smm:top-0 smm:scale-70 sm:scale-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder for the model */}
            <div className="hidden lg:block">
              {/* This space is for the model image which is part of the background */}
            </div>
            
            {/* Right side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Decorative dots */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-800 rounded-full"></div>
                  ))}
                  <div className="w-4 h-4 bg-red-800 rounded-full mx-2"></div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-800 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif text-red-800 mb-8 leading-tight">
                ADD A FRESH TOUCH TO<br />
                YOUR WARDROBE WITH<br/>
                Our rajputi collection
              </h2>
              
              {/* Brand Logo */}
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <h3 className="text-5xl md:text-6xl font-script text-red-800 italic notranslate">Rajputi Textiles</h3>
                  <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-2xl">🪶</div>
                  </div>
                </div>
                <p className="text-red-700 text-sm mt-2 font-medium tracking-wider notranslate">By saroj Kanwar and Bhanwar Singh</p>
              </div>
              
              {/* Shop Now Button */}
            <Link to={"/suits"} >  <button className="inline-flex items-center space-x-2 bg-transparent border-2 border-red-800 text-red-800 px-8 py-3 hover:bg-red-800 hover:text-white transition-all duration-300 font-medium tracking-wider">
                <span>SHOP NOW</span>
                <ArrowRight className="h-5 w-5" />
              </button>

            </Link>
              
              {/* Decorative dots bottom */}
              <div className="flex justify-center lg:justify-start mt-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-800 rounded-full"></div>
                  ))}
                  <div className="w-4 h-4 bg-red-800 rounded-full mx-2"></div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-800 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;