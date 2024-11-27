import React from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface JerseyAndFoodProps {
  values: {
    jerseySize: string;
  };
  errors: any;
  handleChange: HandleChangeFunction;
}

const JerseyAndFood: React.FC<JerseyAndFoodProps> = ({ values, errors, handleChange }) => {
  const jerseySizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Jersey and Food</h2>

      {/* Jersey Size Dropdown */}
      <div>
        <label
          htmlFor="jerseyAndFood.jerseySize"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Jersey Size
        </label>
        <select
          id="jerseyAndFood.jerseySize"
          name="jerseyAndFood.jerseySize"
          value={values.jerseySize}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 hover:border-gray-400"
          required
        >
          <option value="" disabled>
            Select a size
          </option>
          {jerseySizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {errors['jerseyAndFood.jerseySize'] && (
          <p className="text-red-500 text-sm mt-2">{errors['jerseyAndFood.jerseySize']}</p>
        )}
      </div>
    </div>
  );
};

export default JerseyAndFood;
