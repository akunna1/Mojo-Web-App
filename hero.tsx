// src/components/hero.tsx

const Hero = () => {
  return (
    <div className="relative bg-[#f8f9fa] p-6 rounded-lg shadow-md text-center py-16 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#444444] mb-4 leading-tight">
        Hi, I am Mojo &#x1F44B;
      </h1>
      <h2 className="text-xl sm:text-2xl text-[#444444] mb-8 max-w-xl mx-auto">
        I was created by Lady Akunna to serve as a mental health goals assistant
      </h2>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex items-center text-[#6c757d] text-lg animate-bounce">
          <span>Scroll Down</span>
          <span className="ml-2 text-[#FFC107]">&#8595;</span> {/* Using an arrow */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
