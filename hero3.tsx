"use client";

const Hero3 = () => {
    return (
        <div className="bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:py-16 sm:px-8">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
                How I Work?
            </h1>

            {/* Steps Container with animation */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full space-y-6 animate-bounce-y">
                {/* Step 1 */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div className="text-lg sm:text-xl text-gray-700">Login with your gmail account</div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div className="text-lg sm:text-xl text-gray-700">Select an emotion then a resource</div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div className="text-lg sm:text-xl text-gray-700">View or edit your resource</div>
                </div>
            </div>
        </div>
    );
};

export default Hero3;
