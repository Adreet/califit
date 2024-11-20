
import Header from '../components/Header';
import Footer from '../components/Footer';

function TermsOfUse() {
    return (
        <>
            <Header />
            <div className="mt-32 mb-20 bg-gray-800 text-white p-6 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Terms of Use</h1>
                <p className="mb-4">
                    By registering, you agree to abide by the following terms:
                </p>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold">Eligibility</h2>
                        <p>
                            Only registered athletes are allowed to participate.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Accurate Information</h2>
                        <p>
                            You must provide accurate details during registration.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Payment</h2>
                        <p>
                            Registration is confirmed only after successful payment through Razorpay.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Code of Conduct</h2>
                        <p>
                            All participants are expected to adhere to event rules and respect others.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Disqualification</h2>
                        <p>
                            Misconduct or false information may result in disqualification without a refund.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TermsOfUse;
