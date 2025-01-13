'use client';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { IoIosArrowDown } from "react-icons/io";
import { db } from "../firebase/config"; // my config.ts file
import { collection, doc, setDoc } from "firebase/firestore";

const Hero4 = () => {
    return (
        <div className= "h-dvh">
        <div className="text-center p-7">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black uppercase">Help Center</h1>
        <p>
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
          <TfiLayoutLineSolid className="text-[#FFC107] inline" style={{ strokeWidth: 2 }} />
        </p>
        <p className="text-gray-400 text-sm md:text-base mb-8">Remember, consistency is the key!</p>

        <form className="mt-6 space-y-6">
          {/* Question 1 */}
          <div>
            <p className="text-lg text-gray-700 font-semibold mb-2">How are you feeling today, darling?</p>
            <div className="relative w-full px-5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                defaultValue="" // Use defaultValue for uncontrolled form inputs
                required
              >
                <option value="" disabled>--- Select an emotion ---</option>
                <option value="1">Afraid and Anxious &#128552;</option>
                <option value="2">Angry &#128545;</option>
                <option value="3">Ashamed &#128534;</option>
                <option value="4">Discouraged and Overwhelmed &#129301;</option>
                <option value="5">Happy and Grateful &#128513;</option>
                <option value="6">Incompetent &#128549;</option>
                <option value="7">Mildly Irritated &#128580;</option>
                <option value="8">Neutral &#128528;</option>
                <option value="9">Sad &#128546;</option>
              </select>
              <IoIosArrowDown className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <p className="text-lg text-gray-700 font-semibold mb-2">What resource would you like for that?</p>
            <div className="relative w-full px-5">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                defaultValue="" // Use defaultValue here too
                required
              >
                <option value="" disabled>--- Select a resource ---</option>
                <option value="1">Books &#128214;</option>
                <option value="2">Music &#127926;</option>
                <option value="3">Quotes &#128172;</option>
                <option value="4">Videos &#128250;</option>
              </select>
              <IoIosArrowDown className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-fit border-2 text-gray-600 font-semibold border-[#FFC107] py-2 px-8 rounded-full hover:bg-[#FFC107] transition-colors"
            disabled
          >
            Tell Me
          </button>

          {/* Response Box */}
          <div className="px-5">
            <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <h5 className="text-lg">Self Help Resources...</h5>
            </div>
          </div>
        </form>
    </div>
        </div>
    );
};

export default Hero4;
