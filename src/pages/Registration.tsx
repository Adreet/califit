import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Registration: React.FC = () => {
    const [formData, setFormData] = useState<any>({});
    const [currentStep, setCurrentStep] = useState(1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const steps = [
        { id: 1, title: "Basic Information" },
        { id: 2, title: "Contact Information" },
        { id: 3, title: "Event Category Selection" },
        { id: 4, title: "Previous Experience" },
        { id: 5, title: "Health & Fitness Details" },
        { id: 6, title: "Jersey Size & Food Preference" },
        { id: 7, title: "Terms and Agreements" },
        { id: 8, title: "Payment & Registration Fees" },
        { id: 9, title: "Athlete Signature & Date" },
    ];

    const renderSection = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium">Full Name (as per ID)</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Nickname/Stage Name (Optional)</label>
                                <input
                                    type="text"
                                    name="nickname"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Gender</label>
                                <select
                                    name="gender"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Nationality</label>
                                <input
                                    type="text"
                                    name="nationality"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Emergency Contact Name</label>
                                <input
                                    type="text"
                                    name="emergencyContactName"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Emergency Contact Number</label>
                                <input
                                    type="text"
                                    name="emergencyContactNumber"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Relationship with Emergency Contact</label>
                                <input
                                    type="text"
                                    name="relationship"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="space-y-4">
                            <label className="block text-sm font-medium">Main Sport Category</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Statics", "Freestyle", "Endurance Beginner", "Endurance Advanced", "Streetlifting"].map(
                                    (category) => (
                                        <div key={category} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="sportCategory"
                                                value={category}
                                                onChange={handleInputChange}
                                                className="w-4 h-4"
                                            />
                                            <label>{category}</label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Have you participated in Cali Games before?</label>
                                <div className="flex space-x-6">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="previousParticipation"
                                            value="Yes"
                                            onChange={handleInputChange}
                                            className="w-4 h-4"
                                        />
                                        <label className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="previousParticipation"
                                            value="No"
                                            onChange={handleInputChange}
                                            className="w-4 h-4"
                                        />
                                        <label className="ml-2">No</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Years of Experience in Selected Sport</label>
                                <input
                                    type="text"
                                    name="yearsExperience"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Notable Achievements/Awards (if any)</label>
                                <textarea
                                    name="achievements"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Medical Conditions/Allergies (if any)</label>
                                <input
                                    type="text"
                                    name="medicalConditions"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <div className="space-y-4">
                            <label className="block text-sm font-medium">Jersey Size</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                    <div key={size} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="jerseySize"
                                            value={size}
                                            onChange={handleInputChange}
                                            className="w-4 h-4"
                                        />
                                        <label>{size}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <div className="space-y-4">
                            <p className="text-sm">Please agree to our terms and conditions to proceed with the registration.</p>
                            <div className="flex items-center space-x-2 mt-4">
                                <input
                                    type="checkbox"
                                    name="termsAgreement"
                                    onChange={handleInputChange}
                                    className="w-4 h-4"
                                />
                                <label className="text-sm">I agree to the terms and conditions.</label>
                            </div>
                        </div>
                    </div>
                );
            case 8:
                return (
                    <div>
                        <div className="space-y-4">
                            <label className="block text-sm font-medium">Payment Status</label>
                            <div className="flex space-x-6">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentStatus"
                                        value="Paid"
                                        onChange={handleInputChange}
                                        className="w-4 h-4"
                                    />
                                    <label className="ml-2">Paid</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentStatus"
                                        value="Pending"
                                        onChange={handleInputChange}
                                        className="w-4 h-4"
                                    />
                                    <label className="ml-2">Pending</label>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Header />

            <div className=" lg:mx-20 mx-4 mt-32 p-6 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800">Cali Games 3.0 Athlete Registration Form</h1>

                {/* Steps Navigation */}
                <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg shadow-sm sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse overflow-x-auto">
                    {steps.map((step, index) => (
                        <li key={step.id} className={`flex items-center whitespace-nowrap ${index < steps.length - 1 ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-3 dark:after:border-gray-700' : ''}`}>
                            <span
                                className={`flex items-center ${index < steps.length - 1 ? 'after:content-["/"] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500' : ''}`}
                            >
                                <span
                                    className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0
          ${currentStep === step.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-500 text-gray-500'}`}
                                >
                                    {step.id}
                                </span>
                                {step.title}
                            </span>

                        </li>
                    ))}
                </ol>



                {/* Current Step Content */}
                <div>{renderSection()}</div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                        className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => currentStep < steps.length && setCurrentStep(currentStep + 1)}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Registration;
