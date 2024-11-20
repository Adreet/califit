import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg_hero from "../assets/bg-hero.jpg";
import cali1 from "../assets/CaliGames_All (100 of 167).jpg"
import cali2 from "../assets/CaliGames_All (103 of 167).jpg"
import cali3 from "../assets/CaliGames_All (113 of 167).jpg"
import cali4 from "../assets/CaliGames_All (126 of 167).jpg"
import cali5 from "../assets/CaliGames_All (127 of 167).jpg"
import cali6 from "../assets/CaliGames_All (133 of 167).jpg"
import cali7 from "../assets/CaliGames_All (137 of 167).jpg"
import cali8 from "../assets/CaliGames_All (142 of 167).jpg"
import cali9 from "../assets/CaliGames_All (149 of 167).jpg"
import cali10 from "../assets/CaliGames_All (155 of 167).jpg"
import cali11 from "../assets/CaliGames_All (160 of 167).jpg"
import cali12 from "../assets/CaliGames_All (166 of 167).jpg"

const images = [
    cali1,
    cali2,
    cali3,
    cali4,
    cali5,
    cali6,
    cali7,
    cali8,
    cali9,
    cali10,
    cali11,
    cali12,
    cali10,
    cali11,

]

const CaliGamesPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
        <>
            <Header />
            <section className="mt-20  py-16 px-6 md:px-12 lg:px-24">
                {/* Event Overview Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl text-white font-bold mb-6">Cali Games 3.0</h2>
                    <p className="text-lg text-white max-w-3xl mx-auto mb-6">
                        Cali Games 3.0 is set to take place at Royal Global School, the most prestigious venue in Northeast India. This free-for-visitors event will feature athletes from across India and abroad, international judges, and a wide range of street culture elements, such as bboying, rap battles, slacklining, and graffiti art. Whether you’re here to compete or spectate, Cali Games offers something for everyone!
                    </p>
                    <Link to="/register" className="inline-block bg-[#9cff01] text-black px-6 py-3 rounded-lg font-semibold transition hover:bg-[#8bce00]">
                        Register Now
                    </Link>
                </motion.div>

                {/* Event Image */}
                <motion.div
                    className="w-full h-96 overflow-hidden mb-16"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={bg_hero} alt="Cali Games Event" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </motion.div>

                {/* Key Highlights Section */}
                {/* Key Highlights Section */}
                <div className="mb-16">
                    <motion.h3
                        className="text-3xl font-semibold text-white text-center mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Key Highlights
                    </motion.h3>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {[
                            { title: "National Calisthenics Championship", icon: "🏆" },
                            { title: "Inter-school competitions for kids", icon: "👦" },
                            { title: "International judges and athletes", icon: "🌍" },
                            { title: "Workshops by world-class trainers", icon: "🎓" },
                            { title: "Stalls from leading fitness brands", icon: "🛒" },
                        ].map((highlight, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex items-start">
                                
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
                                    <p className="text-gray-600">Discover more about this highlight at the event.</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Photo Gallery Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-4xl font-bold mb-6 text-white">Califit Gallery</h3>
                        <p className="text-lg text-white mb-6">
                            Relive the cybernetic action from last year's augmented reality showdown.
                        </p>
                    </motion.div>
                    <div className="min-h-screen p-8">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            style={{ gridAutoRows: '230px' }} // Sets a base row height for the grid.
                        >
                            {images.map((src, index) => {
                                // Calculate the length of the images array to exclude the last 3 images
                                const isExcluded = index >= images.length - 3;

                                return (
                                    <motion.div
                                        key={index}
                                        className={`relative overflow-hidden rounded-lg shadow-lg ${!isExcluded && index % 3 === 0 ? 'row-span-2' : 'row-span-1'
                                            }`} // Apply larger height to non-excluded images
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onHoverStart={() => setHoveredIndex(index)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                    >
                                        <div className="h-full w-full">
                                            <img
                                                src={src}
                                                alt={`gallery-photo-${index + 1}`}
                                                className="object-cover w-full h-full"
                                                style={{
                                                    minHeight: !isExcluded && index % 3 === 0 ? '400px' : '200px', // Apply larger height to non-excluded images
                                                }}
                                            />
                                        </div>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-green-500/50 via-green-500/50 to-cyan-500/50 opacity-40"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-white text-2xl font-bold glitch-text">
                                                CG 2.0
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </motion.div>

            </section>
            <Footer />
        </>
    );
};

export default CaliGamesPage;
