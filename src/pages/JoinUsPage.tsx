import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const JoinUsPage = () => {
    return (
        <>
            <Header />
            <section className="py-32 px-6 md:px-12 lg:px-24  min-h-[70vh]">
                {/* Membership Plans Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-white">Join Us</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-white">
                        We offer flexible plans to suit your fitness journey, from beginners to advanced athletes. Explore our packages and choose what works best for you.
                    </p>
                    <a
                        href="https://wa.me/918811056318?text=Hello"
                        className="inline-block bg-[#9cff01] text-black px-8 py-3 rounded-full font-semibold transition hover:bg-[#8bce00]"
                        target="_blank" // Opens in a new tab
                    >
                        Explore Plans
                    </a>

                </motion.div>


            </section>
            <Footer />
        </>
    )
}

export default JoinUsPage
