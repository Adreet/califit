import React from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface BasicInformationProps {
  values: {
    fullName: string;
    nickname: string;
    dob: string;
    gender: string;
    nationality: string;
  };
  errors: Record<string, string>;
  handleChange: HandleChangeFunction;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ values, errors, handleChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">Basic Information</h2>

      {/* Full Name and Nickname */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px]">
          <label
            htmlFor="basicInformation.fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="basicInformation.fullName"
            name="basicInformation.fullName"
            value={values.fullName}
            onChange={handleChange}
            aria-required="true"
            aria-label="Full Name"
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors['basicInformation.fullName'] && (
            <p className="text-red-500 text-sm mt-1">{errors['basicInformation.fullName']}</p>
          )}
        </div>

        <div className="flex-1 min-w-[250px]">
          <label
            htmlFor="basicInformation.nickname"
            className="block text-sm font-medium text-gray-700"
          >
            Nickname
          </label>
          <input
            type="text"
            id="basicInformation.nickname"
            name="basicInformation.nickname"
            value={values.nickname}
            onChange={handleChange}
            aria-label="Nickname"
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      </div>

      {/* Date of Birth and Gender */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px]">
          <label
            htmlFor="basicInformation.dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="basicInformation.dob"
            name="basicInformation.dob"
            value={values.dob}
            onChange={handleChange}
            aria-required="true"
            aria-label="Date of Birth"
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors['basicInformation.dob'] && (
            <p className="text-red-500 text-sm mt-1">{errors['basicInformation.dob']}</p>
          )}
        </div>

        <div className="flex-1 min-w-[250px]">
          <label
            htmlFor="basicInformation.gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="basicInformation.gender"
            name="basicInformation.gender"
            value={values.gender}
            onChange={handleChange}
            aria-required="true"
            aria-label="Gender"
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors['basicInformation.gender'] && (
            <p className="text-red-500 text-sm mt-1">{errors['basicInformation.gender']}</p>
          )}
        </div>
      </div>

      {/* Nationality */}
      <div className="w-full">
        <label
          htmlFor="basicInformation.nationality"
          className="block text-sm font-medium text-gray-700"
        >
          Nationality
        </label>
        <input
          type="text"
          id="basicInformation.nationality"
          name="basicInformation.nationality"
          value={values.nationality}
          onChange={handleChange}
          aria-required="true"
          aria-label="Nationality"
          className="block w-full sm:w-1/2 px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors['basicInformation.nationality'] && (
          <p className="text-red-500 text-sm mt-1">{errors['basicInformation.nationality']}</p>
        )}
      </div>
    </div>
  );
};

export default BasicInformation;
