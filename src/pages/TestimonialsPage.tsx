import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const testimonials = [
    {
        quote: "Always wanted to train calisthenics from many years since I got to know about it, but never found a place which teaches calisthenics here in assam. But 3 months ago while randomly searching calisthenics on googlemap, when I came to know about califit, I immediately joined within a week. Since last 3 months while training this art, it has hit muscle groups of my body, which has never been activated before in my life. And being a body weight training and which requires so much less equipments and such small space, this much result in a short period of time is quite astonishing. But this art requires good guidance,, for which trainers in califit Mr. Bhaskar Saud and Mr. Avinash is quite remarkable.",
        name: "Mrigankajit Dutta",
        role: "Athlete"
    },
    {
        quote: "Cali Games is an experience like no other. The energy, the competition, and the chance to learn from international pros was incredible.An amazing and novel place to get fit! The best part about calisthenics I have experienced is that the strength and skills one builds here is transferable to other activities like running, rock climbing and boxing. This would never have been possible through traditional gym equipment based workouts. Finally, to top it all, one has a very motivated and cool coach (Bhaskar) to guide you through it!",
        name: "Boris Kalita",
        role: "Athlete"
    },
    {
        quote: "It was very nice to see the calisthenics studio in Guwahati and I am taking training in the same studio and the trainer there is very good, please if you are a calisthenics lover then come here without any delay.",
        name: "Intaj Ali",
        role: "Athlete"
    },
    {
        quote: "The only calisthenics studio of northeast. The founder of the studio Bhaskar himself is a prodigy in this field. His contributions not only in Calisthenics in the state but also of transforming the lives of many people across various age groups and professions is commendable . Highly recommend Califit Calisthenics if you really want to make a change in your life and of course your health.",
        name: "Mridusmita Das",
        role: "Athlete"
    },
    {
        quote: "First and the only studio dedicated to Calisthenics in Guwahati. Mr.Bhaskar Saud is a very dedicated and motivating coach you will love training with him. A beautiful well maintained small studio space. Join now to learn a new form of body weight training which you can do anywhere anytime without any gym equipments.",
        name: "Suryaprakash Medhi",
        role: "Athlete"
    },
    {
        quote: "Great place to learn Calisthenics. And one and only Calisthenics Studio / gym in Guwahati with experienced WSWCF ( World Street Workout and Calisthenics Federation ) certified Trainer.",
        name: "Biki Boro",
        role: "Athlete"
    }
];

const TestimonialsPage = () => {
    return (
        <>
            <Header />
            <section className="pt-32 py-16 px-6 md:px-12 lg:px-24">
                {/* Headline */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl text-white font-bold mb-4">What Our Community Says</h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">Hear from those who’ve experienced Califit and Cali Games firsthand.</p>
                </motion.div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                        >
                            <FaQuoteLeft className="text-[#9cff01] text-3xl mb-4" />
                            <p className="text-lg text-gray-800 mb-4">"{testimonial.quote}"</p>
                            <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TestimonialsPage;
