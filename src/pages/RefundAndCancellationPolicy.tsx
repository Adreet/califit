import Header from '../components/Header';
import Footer from '../components/Footer';

function RefundAndCancellationPolicy() {
    return (
        <>
            <Header />
            <div className="mt-32 mb-20 bg-gray-800 text-white p-6 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Refund and Cancellation Policy</h1>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold">No Refund Policy</h2>
                        <p>
                            Registration fees are non-refundable under any circumstances.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Event Cancellation</h2>
                        <p>
                            If the event is canceled due to unforeseen circumstances, participants will be notified, and a refund or rescheduling policy will be communicated.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Transfers</h2>
                        <p>
                            Registrations are non-transferable to other individuals or events.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RefundAndCancellationPolicy;
