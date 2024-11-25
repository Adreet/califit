import React from 'react';
import { HandleChangeFunction } from '../../hooks/useFormValidation';

interface ContactInformationProps {
  values: {
    phoneNumber: string;
    email: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    relationshipWithEmergencyContact: string;
  };
  errors: any;
  handleChange: HandleChangeFunction;
}

const ContactInformation: React.FC<ContactInformationProps> = ({ values, errors, handleChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>

      {/* Phone Number and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div>
          <label htmlFor="contactInformation.phoneNumber" className="block text-lg font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="contactInformation.phoneNumber"
            name="contactInformation.phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
          {errors['contactInformation.phoneNumber'] && (
            <p className="text-red-500 text-sm mt-2">{errors['contactInformation.phoneNumber']}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contactInformation.email" className="block text-lg font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="contactInformation.email"
            name="contactInformation.email"
            value={values.email}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
          {errors['contactInformation.email'] && (
            <p className="text-red-500 text-sm mt-2">{errors['contactInformation.email']}</p>
          )}
        </div>
      </div>

      {/* Emergency Contact Name and Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Emergency Contact Name */}
        <div>
          <label
            htmlFor="contactInformation.emergencyContactName"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Emergency Contact Name
          </label>
          <input
            type="text"
            id="contactInformation.emergencyContactName"
            name="contactInformation.emergencyContactName"
            value={values.emergencyContactName}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
          {errors['contactInformation.emergencyContactName'] && (
            <p className="text-red-500 text-sm mt-2">{errors['contactInformation.emergencyContactName']}</p>
          )}
        </div>

        {/* Emergency Contact Number */}
        <div>
          <label
            htmlFor="contactInformation.emergencyContactNumber"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Emergency Contact Number
          </label>
          <input
            type="tel"
            id="contactInformation.emergencyContactNumber"
            name="contactInformation.emergencyContactNumber"
            value={values.emergencyContactNumber}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
          {errors['contactInformation.emergencyContactNumber'] && (
            <p className="text-red-500 text-sm mt-2">{errors['contactInformation.emergencyContactNumber']}</p>
          )}
        </div>
      </div>

      {/* Relationship with Emergency Contact */}
      <div>
        <label
          htmlFor="contactInformation.relationshipWithEmergencyContact"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Relationship with Emergency Contact
        </label>
        <input
          type="text"
          id="contactInformation.relationshipWithEmergencyContact"
          name="contactInformation.relationshipWithEmergencyContact"
          value={values.relationshipWithEmergencyContact}
          onChange={handleChange}
          className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required
        />
        {errors['contactInformation.relationshipWithEmergencyContact'] && (
          <p className="text-red-500 text-sm mt-2">{errors['contactInformation.relationshipWithEmergencyContact']}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInformation;
