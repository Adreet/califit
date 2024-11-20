import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import our_mission from "../assets/CaliGames_All (36 of 167).jpg"
import our_vision from "../assets/CaliGames_All (48 of 167).jpg"
import studio1 from "../assets/IMG_7146_(1).jpg"
import studio2 from "../assets/IMG_7150_(1).jpg"
import studio3 from "../assets/IMG_7153_(1).jpg"
import { Star, Users, Book, Dumbbell} from 'lucide-react'

const AboutPage = () => {
    return (
        <>
            <Header />
            <section className="">
                {/* Hero Section */}

                {/* Our Story Section */}
                <div className=" pt-32 pb-20 z-20 md:px-12 lg:px-24 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Story
                    </motion.h2>

                    

                    <motion.p
                        className="text-lg text-white max-w-4xl mx-auto leading-relaxed mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Califit started with a dream to create a world-class calisthenics hub in Northeast India. Founded by Bhaskar Saud, the region’s first certified trainer by the World Street Workout and Calisthenics Federation, we have transformed lives through fitness and community.
                    </motion.p>

                    <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-center justify-center">
                            <img src={studio1} alt="Our Team" className="h-64 w-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={studio2} alt="Calisthenics Image 1" className="h-64 w-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={studio3} alt="Calisthenics Image 2" className="h-64 w-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>

                </div>


                {/* Our Mission Section */}
                <div className="relative py-20  text-white">
                    <div className="container mx-auto text-center px-6 md:px-12">
                        <motion.h2
                            className="text-4xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Mission
                        </motion.h2>
                        <motion.div
                            className="relative mb-12 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center justify-center h-[500px]">
                                <img src={our_mission} alt="Community" className="h-full w-full object-cover rounded-lg shadow-lg" />
                            </div>
                        </motion.div>
                        <motion.p
                            className="text-lg max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            To inspire a healthier and fitter lifestyle through calisthenics, promoting fitness accessibility to everyone regardless of background or ability.
                        </motion.p>
                    </div>
                </div>

                {/* Our Vision Section */}
                <div className="relative  py-20 px-6 md:px-12 lg:px-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-8 text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Vision
                    </motion.h2>
                    <motion.div
                        className="relative mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center h-[500px]">
                            <img src={our_vision} alt="Community" className="h-full w-full object-cover rounded-lg shadow-lg" />
                        </div>

                    </motion.div>
                    <motion.p
                        className="text-lg text-white max-w-4xl mx-auto text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        To become the leading calisthenics hub in India, fostering a global community of athletes through fitness innovation and outreach.
                    </motion.p>
                </div>

                {/* Why Choose Us Section */}
                <div className=" py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12">
                        {[
                            { title: "Expert Coaching", icon: <Dumbbell size={40}/>, text: "Tailored expert coaching designed to help you achieve your fitness goals." },
                            { title: "Supportive Community", icon: <Book size={40}/>, text: "A welcoming and empowering community for everyone." },
                            { title: "International-Level Events", icon: <Users size={40}/>, text: "Opportunities to compete at an international level in calisthenics." },
                            { title: "Tailored Programs", icon: <Star size={40}/>, text: "Programs customized to your personal fitness level and goals." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="rounded-full mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


                <Footer />
            </section>
        </>
    );
};

export default AboutPage;
