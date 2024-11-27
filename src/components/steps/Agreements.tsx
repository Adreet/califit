import React from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface AgreementsProps {
  values: {
    waiverAgreement: boolean;
    mediaRelease: boolean;
    codeOfConduct: boolean;
  };
  errors: any;
  handleChange: HandleChangeFunction;
}

const Agreements: React.FC<AgreementsProps> = ({ values, errors, handleChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    handleChange({
      target: {
        name,
        value: checked,
        type: 'checkbox'
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Agreements</h2>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="agreements.waiverAgreement"
            checked={values.waiverAgreement}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
          />
          <span className="ml-2 text-sm text-gray-700">I agree to the waiver agreement</span>
        </label>
        {errors['agreements.waiverAgreement'] && <p className="text-red-500 text-sm mt-1">{errors['agreements.waiverAgreement']}</p>}
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="agreements.mediaRelease"
            checked={values.mediaRelease}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
          />
          <span className="ml-2 text-sm text-gray-700">I agree to the media release</span>
        </label>
        {errors['agreements.mediaRelease'] && <p className="text-red-500 text-sm mt-1">{errors['agreements.mediaRelease']}</p>}
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="agreements.codeOfConduct"
            checked={values.codeOfConduct}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
          />
          <span className="ml-2 text-sm text-gray-700">I agree to follow the code of conduct</span>
        </label>
        {errors['agreements.codeOfConduct'] && <p className="text-red-500 text-sm mt-1">{errors['agreements.codeOfConduct']}</p>}
      </div>
    </div>
  );
};

export default Agreements;

