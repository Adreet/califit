import React from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface HealthAndFitnessProps {
  values: {
    medicalConditions: string;
    currentFitnessLevel: string;
    onMedication: boolean;
    healthInsurance: boolean;
  };
  errors: any;
  handleChange: HandleChangeFunction;
}

const HealthAndFitness: React.FC<HealthAndFitnessProps> = ({ values, errors, handleChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Health and Fitness</h2>

      {/* Medical Conditions */}
      <div>
        <label
          htmlFor="healthAndFitness.medicalConditions"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Medical Conditions
        </label>
        <textarea
          id="healthAndFitness.medicalConditions"
          name="healthAndFitness.medicalConditions"
          value={values.medicalConditions}
          onChange={handleChange}
          rows={4}
          placeholder="List any medical conditions here..."
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
        ></textarea>
        {errors.medicalConditions && (
          <p className="text-red-500 text-sm mt-1">{errors.medicalConditions}</p>
        )}
      </div>

      {/* Current Fitness Level */}
      <div>
        <label
          htmlFor="healthAndFitness.currentFitnessLevel"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Current Fitness Level
        </label>
        <input
          type="text"
          id="healthAndFitness.currentFitnessLevel"
          name="healthAndFitness.currentFitnessLevel"
          value={values.currentFitnessLevel}
          onChange={handleChange}
          placeholder="e.g., Beginner, Intermediate, Advanced"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
        />
        {errors.currentFitnessLevel && (
          <p className="text-red-500 text-sm mt-1">{errors.currentFitnessLevel}</p>
        )}
      </div>

      {/* On Medication */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-3">
          Are you currently on medication?
        </label>
        <div className="flex items-center space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="healthAndFitness.onMedication"
              value="true"
              checked={values.onMedication === true}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-3 text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="healthAndFitness.onMedication"
              value="false"
              checked={values.onMedication === false}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-3 text-gray-700">No</span>
          </label>
        </div>
        {errors.onMedication && (
          <p className="text-red-500 text-sm mt-1">{errors.onMedication}</p>
        )}
      </div>

      {/* Health Insurance */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-3">
          Do you have health insurance?
        </label>
        <div className="flex items-center space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="healthAndFitness.healthInsurance"
              value="true"
              checked={values.healthInsurance === true}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-3 text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="healthAndFitness.healthInsurance"
              value="false"
              checked={values.healthInsurance === false}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-3 text-gray-700">No</span>
          </label>
        </div>
        {errors.healthInsurance && (
          <p className="text-red-500 text-sm mt-1">{errors.healthInsurance}</p>
        )}
      </div>
    </div>
  );
};

export default HealthAndFitness;
