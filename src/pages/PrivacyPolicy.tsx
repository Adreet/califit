
import Header from '../components/Header'
import Footer from '../components/Footer'

function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className=" mt-32 mb-20 bg-gray-800 text-white p-6 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    We respect your privacy and are committed to protecting your personal information. By registering for our event, you agree to the collection and use of your data in accordance with this policy:
                </p>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold">Data Collection</h2>
                        <p>
                            We collect personal information (e.g., name, contact details, and payment information) solely for event registration and communication.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Data Use</h2>
                        <p>
                            Your data will be used for processing registrations, event updates, and payment verifications via Razorpay.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Data Sharing</h2>
                        <p>
                            We do not share your information with third parties, except as necessary for payment processing and event logistics.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Data Security</h2>
                        <p>
                            We use secure systems to protect your data.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <p>
                            For queries about your data, please email us at <span className="underline">califitguwahati@gmail.com</span>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default PrivacyPolicy