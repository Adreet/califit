import React from 'react';

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-6 flex justify-center items-center">
      <div className="overflow-x-auto">
        <ol className="flex items-center w-max p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm ">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center ${
                index <= currentStep ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {/* Step Circle */}
              <span
                className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
                  index <= currentStep
                    ? 'bg-blue-600 border-blue-600 text-white dark:border-blue-500 dark:bg-blue-500'
                    : 'bg-gray-200 border-gray-500 text-gray-600 dark:bg-gray-700 dark:border-gray-400 dark:text-gray-400'
                }`}
              >
                {index + 1}
              </span>

              {/* Step Label */}
              <span>{step}</span>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <svg
                  className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProgressBar;
