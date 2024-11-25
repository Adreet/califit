import React from 'react';

interface EventCategoryProps {
  values: {
    mainSportCategory: string[];
  };
  errors: any;
  handleChange: (name: string, value: any) => void;
}

const EventCategory: React.FC<EventCategoryProps> = ({ values, errors, handleChange }) => {
  const categories = ['Statics', 'Freestyle', 'Endurance Beginner', 'Endurance Advanced', 'Streetlifting'];

  const handleCategoryChange = (category: string) => {
    const updatedCategories = values.mainSportCategory.includes(category)
      ? values.mainSportCategory.filter(c => c !== category)
      : [...values.mainSportCategory, category];

    handleChange('eventCategory.mainSportCategory', updatedCategories);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Event Category</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="eventCategory.mainSportCategory">
          Main Sport Category
        </label>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={`eventCategory.mainSportCategory.${category}`}
                name="eventCategory.mainSportCategory"
                value={category}
                checked={values.mainSportCategory.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                aria-describedby={errors['eventCategory.mainSportCategory'] ? 'error-mainSportCategory' : ''}
              />
              <label
                htmlFor={`eventCategory.mainSportCategory.${category}`}
                className="ml-2 block text-sm text-gray-900"
              >
                {category}
              </label>
            </div>
          ))}
        </div>

        {errors['eventCategory.mainSportCategory'] && (
          <p id="error-mainSportCategory" className="text-red-500 text-sm mt-2">
            {errors['eventCategory.mainSportCategory']}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventCategory;
