// src/components/hero2.tsx
import { PiNotepad } from "react-icons/pi";  // Import PiNotepad icon
import { HiOutlineCube } from "react-icons/hi";  // Import HiOutlineCube icon

const Hero2 = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/robo.png"  // Reference the image from the public directory
            alt="Mojo Image"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 pt-4 lg:pt-0">
          <h3 className="text-2xl font-bold text-[#293040]">About Me</h3>
          <p className="mt-4 text-lg text-[#6c757d]">
          I am Mojo Jojo. I have many talents, one of them being your trusted sidekick. My mission? To keep you motivated and focused every single day. First things first, I’d like to check in with you! How are you feeling today, darling? Now, let’s set the tone for the week ahead with your goal. With a sprinkle of motivation, I’m here to remind you of your strength and to suggest resources (e.g., books, videos, music, etc.) to keep your mind sharp and your spirits high. Let’s show this week who’s boss!          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fun Fact Section */}
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md">
              <PiNotepad className="text-xl text-[#FFC107]" />
              <h4 className="mt-2 text-lg font-semibold text-[#293040]">Fun Fact About Reading</h4>
              <p className="text-sm text-[#6c757d] mt-2">
                Research has shown that reading for just six minutes can reduce stress levels by up to 68%. Now that you are aware of that... can you switch off that TV and pick up a book?!
              </p>
            </div>

            {/* Phobia Section */}
            <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md">
              <HiOutlineCube className="text-xl text-[#FFC107]" />
              <h4 className="mt-2 text-lg font-semibold text-[#293040]">My Phobia</h4>
              <p className="text-sm text-[#6c757d] mt-2">
                I have a phobia of cubes. Many people have made fun of me because of that. I don't like cubes very much, and I don't like such people either.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
