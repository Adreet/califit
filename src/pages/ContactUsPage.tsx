import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Facebook, Instagram } from 'lucide-react';

const ContactUsPage = () => {
    return (
        <>
            <Header />
            <section className="pt-32 py-16 px-6 md:px-12 lg:px-24">
                {/* Page Title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        Whether you have a question or want to know more about our services, we’re here to help.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 md:space-x-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Contact Information */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Contact Information</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Address:</strong> 2nd floor, Yuvraj Dynasty, Chandmari U-Turn, Guwahati, Assam
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Email:</strong> <a href="mailto:califitguwahati@gmail.com">califitguwahati@gmail.com</a>
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Phone:</strong> +91-8811056318
                        </p>

                        {/* Social Media Links */}
                        <div className="flex space-x-6 mt-6">
                            <a href="https://www.facebook.com/people/Califit-Calisthenics-Studio/100083157409209/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#9cff01] transition duration-300">
                                <Facebook size={28} />
                            </a>
                            <a href="https://www.instagram.com/califit_calisthenics/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#9cff01] transition duration-300">
                                <Instagram size={28} />
                            </a>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label className="block text-lg font-medium text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9cff01] transition"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-gray-700">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9cff01] transition"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9cff01] transition"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#9cff01] text-black py-3 rounded-lg font-semibold transition hover:bg-[#8bce00]"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
};

export default ContactUsPage;
