import React from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface PreviousExperienceProps {
  values: {
    participatedBefore: boolean;
    yearsOfExperience: string;
    notableAchievements: string;
  };
  errors: any;
  handleChange: HandleChangeFunction;
}

const PreviousExperience: React.FC<PreviousExperienceProps> = ({ values, errors, handleChange }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange({
      target: {
        name,
        value: value === 'true',
        type: 'radio',
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Previous Experience</h2>

      {/* Participated Before */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Have you participated before?</label>
        <div className="flex items-center space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="previousExperience.participatedBefore"
              value="true"
              checked={values.participatedBefore === true}
              onChange={handleRadioChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 transition"
            />
            <span className="ml-2 text-sm text-gray-900">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="previousExperience.participatedBefore"
              value="false"
              checked={values.participatedBefore === false}
              onChange={handleRadioChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 transition"
            />
            <span className="ml-2 text-sm text-gray-900">No</span>
          </label>
        </div>
        {errors['previousExperience.participatedBefore'] && (
          <p className="text-red-500 text-sm mt-1">{errors['previousExperience.participatedBefore']}</p>
        )}
      </div>

      {/* Years of Experience */}
      <div>
        <label htmlFor="previousExperience.yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
          Years of Experience
        </label>
        <input
          type="text"
          id="previousExperience.yearsOfExperience"
          name="previousExperience.yearsOfExperience"
          value={values.yearsOfExperience}
          onChange={handleChange}
          className={`block w-full px-4 py-3 rounded-md border ${
            errors['previousExperience.yearsOfExperience'] ? 'border-red-500' : 'border-gray-300'
          } shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all`}
        />
        {errors['previousExperience.yearsOfExperience'] && (
          <p className="text-red-500 text-sm mt-1">{errors['previousExperience.yearsOfExperience']}</p>
        )}
      </div>

      {/* Notable Achievements */}
      <div>
        <label htmlFor="previousExperience.notableAchievements" className="block text-sm font-medium text-gray-700 mb-2">
          Notable Achievements
        </label>
        <textarea
          id="previousExperience.notableAchievements"
          name="previousExperience.notableAchievements"
          value={values.notableAchievements}
          onChange={handleChange}
          rows={4}
          className={`block w-full px-4 py-3 rounded-md border ${
            errors['previousExperience.notableAchievements'] ? 'border-red-500' : 'border-gray-300'
          } shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all`}
        ></textarea>
        {errors['previousExperience.notableAchievements'] && (
          <p className="text-red-500 text-sm mt-1">{errors['previousExperience.notableAchievements']}</p>
        )}
      </div>
    </div>
  );
};

export default PreviousExperience;
