import { useState, useEffect, useCallback } from 'react';

export type HandleChangeFunction = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string; value: any; type?: string } }
) => void;

type ValidationRule = (value: any) => boolean | string;

export const useFormValidation = (
  initialState: any,
  initialValidationRules: { [key: string]: ValidationRule }
) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isValid, setIsValid] = useState(false);
  const [validationRules] = useState(initialValidationRules);

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(validationRules).forEach((key) => {
      const validationResult = validationRules[key](values[key]);
      if (validationResult !== true) {
        newErrors[key] = typeof validationResult === 'string' ? validationResult : `${key} is invalid`;
      }
    });
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [values, validationRules]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleChange: HandleChangeFunction = useCallback((event) => {
    const { name, value, type } = event.target;
  
    setValues((prevValues: { [x: string]: any; }) => {
      if (!name || !name.includes('.')) {
        return {
          ...prevValues,
          [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
        };
      }
  
      const [section, field] = name.split('.');
      if (section && field) {
        let newValue = value;
        if (type === 'radio') {
          newValue = value === 'true' ? true : value === 'false' ? false : value;
        }
        return {
          ...prevValues,
          [section]: {
            ...prevValues[section],
            [field]: newValue,
          },
        };
      }
  
      return prevValues;
    });
  }, []);

  const handleCustomChange = (name: string, value: any) => {
    setValues((prevValues: { [x: string]: any; }) => {
      const [section, field] = name.split('.');
      if (section && field) {
        return {
          ...prevValues,
          [section]: {
            ...prevValues[section],
            [field]: value,
          },
        };
      }
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  return { values, errors, isValid, handleChange, handleCustomChange, setValues };
};

