
import Header from '../components/Header';
import Footer from '../components/Footer';

function ShippingAndDeliveryPolicy() {
    return (
        <>
            <Header />
            <div className="mt-32 mb-20 bg-gray-800 text-white p-6 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Shipping and Delivery Policy</h1>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold">Digital Confirmation</h2>
                        <p>
                            Upon successful registration, you will receive a confirmation email with your registration details.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Physical Deliverables</h2>
                        <p>
                            If any event merchandise is included in the registration, it will be provided on the event day at the venue.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Delays</h2>
                        <p>
                            The organizers are not responsible for delays caused by factors outside their control.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShippingAndDeliveryPolicy;
