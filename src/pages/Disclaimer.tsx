
import Header from '../components/Header';
import Footer from '../components/Footer';

function Disclaimer() {
    return (
        <>
            <Header />
            <div className="mt-32 mb-20 bg-gray-800 text-white p-6 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Disclaimer</h1>
                <div className="space-y-4">
                    <div>
                        <p>
                            Participation in this event involves physical activity and carries inherent risks.
                        </p>
                    </div>
                    <div>
                        <p>
                            By registering, you acknowledge and accept these risks and agree not to hold the organizers liable for any injury, loss, or damage during the event.
                        </p>
                    </div>
                    <div>
                        <p>
                            We reserve the right to modify or cancel the event in case of unforeseen circumstances.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Disclaimer;
