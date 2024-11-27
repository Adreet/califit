import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import ProgressBar from './ProgressBar';
import BasicInformation from '../components/steps/BasicInformation';
import ContactInformation from '../components/steps/ContactInformation';
import EventCategory from '../components/steps/EventCategory';
import PreviousExperience from '../components/steps/PreviousExperience';
import HealthAndFitness from '../components/steps/HealthAndFitness';
import JerseyAndFood from '../components/steps/JerseyAndFood';
import Agreements from '../components/steps/Agreements';
import PaymentDetails from '../components/steps/PaymentDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';

const initialState = {
  basicInformation: {
    fullName: '',
    nickname: '',
    dob: '',
    gender: '',
    nationality: '',
  },
  contactInformation: {
    phoneNumber: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    relationshipWithEmergencyContact: '',
  },
  eventCategory: {
    mainSportCategory: [],
  },
  previousExperience: {
    participatedBefore: false,
    yearsOfExperience: '',
    notableAchievements: '',
  },
  healthAndFitness: {
    medicalConditions: '',
    currentFitnessLevel: '',
    onMedication: false,
    healthInsurance: false,
  },
  jerseyAndFood: {
    jerseySize: '',
  },
  agreements: {
    waiverAgreement: false,
    mediaRelease: false,
    codeOfConduct: false,
  },
  paymentDetails: {
    transactionId: '',
  },
  submissionDetails: {
    confirmed: false,
    submissionDate: '',
  },
};

const steps = [
  'Basic Information',
  'Contact Information',
  'Event Category',
  'Previous Experience',
  'Health and Fitness',
  'Jersey and Food',
  'Agreements',
  'Payment Details',
];

const Registration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { values, errors, isValid, handleChange, handleCustomChange } = useFormValidation(initialState, {});

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<Element>) => {
  e.preventDefault();
  if (isValid) {
    try {
      const submissionData = {
        ...values,
        submissionDetails: {
          confirmed: true,
          submissionDate: new Date().toISOString(),
        },
      };

      const response = await fetch('https://califitcalisthenics.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        alert('Registration successful!');
        // Reset form or redirect to a success page
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        alert('Registration failed. Please check the form and try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  } else {
    alert('Please fill in all required fields correctly before submitting.');
  }
};


  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicInformation values={values.basicInformation} errors={errors} handleChange={handleChange} />;
      case 1:
        return <ContactInformation values={values.contactInformation} errors={errors} handleChange={handleChange} />;
      case 2:
        return <EventCategory values={values.eventCategory} errors={errors} handleChange={handleCustomChange} />;
      case 3:
        return <PreviousExperience values={values.previousExperience} errors={errors} handleChange={handleChange} />;
      case 4:
        return <HealthAndFitness values={values.healthAndFitness} errors={errors} handleChange={handleChange} />;
      case 5:
        return <JerseyAndFood values={values.jerseyAndFood} errors={errors} handleChange={handleChange} />;
      case 6:
        return <Agreements values={values.agreements} errors={errors} handleChange={handleChange} />;
      case 7:
        return <PaymentDetails values={values.paymentDetails} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>;
      default:
        return null;
    }
  };

  return (
    <>
    <Header/>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-8 container mx-auto px-4 py-8 mt-32">
        <ProgressBar steps={steps} currentStep={currentStep} />
        <form onSubmit={handleSubmit} className="mt-8">
          {renderStep()}
          <div className="mt-6 flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="hidden bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer/>
    </>

  );
};

export default Registration;

