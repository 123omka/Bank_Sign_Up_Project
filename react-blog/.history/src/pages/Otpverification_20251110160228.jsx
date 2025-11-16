
import React from "react";

const ProgressBar = ({ currentStep }) => {
  const totalSteps = 6; 

  return (
    <div className="flex justify-center items-center space-x-2 mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            index === currentStep
              ? "bg-blue-600 scale-110"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
