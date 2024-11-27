import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import caliclasses from "../assets/IMG_7153_(1).jpg";
import workshop from "../assets/IMG_7210.jpg";
import caligames from "../assets/CaliGames_All (20 of 167).jpg";

const serviceCardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const ServicesPage = () => {
    return (
        <>
            <Header />
            <section className="pt-32 py-16 px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Calisthenics Classes */}
                    <motion.div
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
                        variants={serviceCardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <img src={caliclasses} alt="Calisthenics" className="w-full h-56 object-cover" />
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-4">Calisthenics Classes</h3>
                            <p className="text-gray-700 mb-6">
                                Whether you’re a beginner or an advanced athlete, our calisthenics classes are tailored to challenge you and help you achieve your fitness goals. From strength training to mobility and flexibility, we cover it all.
                            </p>
                            <Link to="/" className="w-32 inline-block bg-[#9cff01] text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-[#8bce00]">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Workshops & Special Events */}
                    <motion.div
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
                        variants={serviceCardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <img src={workshop} alt="Workshops" className="w-full h-56 object-cover" />
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-4">Workshops & Special Events</h3>
                            <p className="text-gray-700 mb-6">
                                Learn from the best! Califit hosts workshops with international athletes and calisthenics experts to help you perfect your form, boost your strength, and take your skills to the next level.
                            </p>
                            <Link to="/" className="w-32 inline-block bg-[#9cff01] text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-[#8bce00]">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Cali Games */}
                    <motion.div
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
                        variants={serviceCardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <img src={caligames} alt="Cali Games" className="w-full h-56 object-cover" />
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-4">Cali Games</h3>
                            <p className="text-gray-700 mb-6">
                                Cali Games is Northeast India’s premier fitness festival, featuring national-level calisthenics competitions, workshops, and an exciting mix of street culture, including bboying, skateboarding, and more.
                            </p>
                            <Link to="/" className="w-32 inline-block bg-[#9cff01] text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-[#8bce00]">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ServicesPage;
