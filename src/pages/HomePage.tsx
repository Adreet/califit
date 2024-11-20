import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ChevronRight, Star, Users, Book, Dumbbell, ArrowDown, Info, ChevronLeft, User } from 'lucide-react'
import bg_hero from "../assets/bg-hero.jpg"
import Header from '../components/Header'
import video from "../assets/video.mp4"
import Footer from '../components/Footer'
import founder from "../assets/logo.png"
import bg_hero2 from "../assets/CaliGames_All (38 of 167).jpg"
import bg_hero3 from "../assets/CaliGames_All (100 of 167).jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface FlyingElementProps {
    children: React.ReactNode
    direction?: 'left' | 'right'
    delay?: number
}

const FlyingElement: React.FC<FlyingElementProps> = ({ children, direction = 'left', delay = 0 }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
                visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    )
}



interface ServiceCardProps {
    title: string
    description: string
    icon: React.ElementType // Ensures it can accept any component
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: { opacity: 1, y: 0, scale: 1 },
                hidden: { opacity: 0, y: 50, scale: 0.95 }
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-white via-gray-100 to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
        >
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9cff01] to-transparent opacity-5 pointer-events-none"></div>

            {/* Animated Icon Container */}
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
                className="relative z-20 flex items-center justify-center w-16 h-16 bg-[#02ae23] rounded-full mb-6 shadow-md hover:shadow-lg transition-transform duration-300"
            >
                <Icon className="text-white w-10 h-10" />
            </motion.div>

            {/* Title with hover underline */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4 relative z-20 hover:underline transition-colors duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed relative z-20">
                {description}
            </p>
        </motion.div>
    )
}


export default function HomePage() {
    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        testimonials: useRef(null),
        contact: useRef(null),
    }

    const [backgroundIndex, setBackgroundIndex] = useState(0);

    // Array of backgrounds (videos and images)
    const backgrounds = [
        { type: 'video', src: video },
        { type: 'image', src: bg_hero2 },
        { type: 'image', src: bg_hero3 },
    ];

    // Function to handle background change
    const handleNext = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    const handlePrev = () => {
        setBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
    };


    return (
        <ParallaxProvider>
            <div className="min-h-screen text-white">
                {/* Header */}
                <Header />

                {/* Hero Section with Parallax */}
                <section id="home" className="h-screen flex items-center justify-center overflow-hidden relative">
                    {/* Parallax Effect for Background */}
                    <div className="absolute inset-0">
                        <div className="absolute z-40 opacity-40 inset-0 bg-black w-full min-h-screen object-cover"></div>

                        {backgrounds[backgroundIndex].type === 'video' ? (
                            <video
                                className="absolute top-0 left-0 w-full min-h-screen object-cover opacity-60"
                                src={backgrounds[backgroundIndex].src}
                                playsInline autoPlay muted loop
                            />
                        ) : (
                            <img
                                className="absolute top-0 left-0 w-full min-h-screen object-cover opacity-60"
                                src={backgrounds[backgroundIndex].src}
                                alt="Background"
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div className="text-center flex flex-col justify-center items-center relative z-40">
                        {/* Notification Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="animate-pulse flex items-center bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg font-bold text-xs sm:text-sm md:text-base mb-3 sm:mb-4"
                        >
                            <Info className="mr-1 sm:mr-2" />
                            Cali Games 3.0 Coming Soon!
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-5xl sm:text-5xl md:text-8xl font-bold mb-3 sm:mb-4 mx-6 sm:mx-12 md:mx-20"
                        >
                            <span className="text-[#9cff01]">Califit</span> Calisthenics
                        </motion.h1>


                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-lg sm:text-xl md:text-3xl mb-4 sm:mb-6 text-center px-4 sm:px-0"
                        >
                            The Heart of Calisthenics in Northeast India
                        </motion.p>

                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
                        >
                            <a
                                href="#contact"
                                className="bg-[#9cff01] text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-colors max-w-7xl text-center"
                            >
                                Join the movement
                            </a>
                            <a
                                href="#contact"
                                className="bg-[#9cff01] text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-colors max-w-7xl text-center"
                            >
                                Learn More
                            </a>
                        </motion.div> */}

                        
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex gap-x-3 uppercase text-xl sm:text-5xl md:text-2xl font-bold mb-3 sm:mb-4 mx-6 sm:mx-12 md:mx-20"
                        >
                            <span className="text-[#9cff01]">Dream</span>
                            <span>Create</span>
                            <span className="text-[#9cff01]">Inspire</span>
                        </motion.h1>
                    </div>

                    {/* Arrow to Indicate Scrolling */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <ArrowDown size={32} className="text-[#9cff01]" />
                    </motion.div>

                    {/* Left and Right Indicators for Background Switching */}
                    <button
                        className="absolute z-40 left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-md bg-black bg-opacity-50 p-1.5 sm:p-2 rounded-full"
                        onClick={handlePrev}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        className="absolute z-40 right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-md bg-black bg-opacity-50 p-1.5 sm:p-2 rounded-full"
                        onClick={handleNext}
                    >
                        <ChevronRight />
                    </button>
                </section>


                {/* About Section */}
                <section ref={sectionRefs.about} id="about" className=" pt-20 relative overflow-hidden">

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-8 text-center"
                        >
                            About Califit
                        </motion.h2>

                        <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0">
                            <FlyingElement direction="left">
                                <div className=" flex justify-center md:justify-start p-10">
                                    <img
                                        src={founder}
                                        alt="Calisthenics training"
                                        className="rounded-lg shadow-lg object-cover h-auto w-full max-w-6xl md:max-w-6xl"
                                    />
                                </div>
                            </FlyingElement>

                            <FlyingElement direction="right" delay={0.2}>
                                <div className="md:w-full">
                                    <p className="text-xl  mb-4">
                                        Califit is Northeast India’s only designated calisthenics center, founded by Bhaskar Saud, certified by the World Street Workout and Calisthenics Federation. We are committed to providing a holistic fitness approach that merges strength, agility, and bodyweight training to people of all ages.
                                    </p>
                                    <p className="text-xl mb-4">
                                        Whether you're a beginner or an advanced athlete, our programs are tailored to meet your individual needs and push you to new heights.
                                    </p>

                                    <a
                                        href="https://www.instagram.com/bhaskar_calisthenics/"
                                        className="inline-flex items-center text-white font-bold hover:text-blue-500 transition-colors duration-300"
                                    >
                                        Meet our founder <ChevronRight size={20} className="ml-1" />
                                    </a>
                                </div>
                            </FlyingElement>
                        </div>
                    </div>
                </section>




                {/* <CalisthenicsAnimation>Push-up</CalisthenicsAnimation> */}

                {/* Parallax Section */}
                {/* <ParallaxSection /> */}

                {/* Services Section */}
                <section ref={sectionRefs.services} id="services" className="lg:px-20 pt-20 relative overflow-hidden">

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-12 text-center text-white"
                        >
                            Our Services
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceCard
                                title="Calisthenics Classes"
                                description="Weekly structured calisthenics classes for all fitness levels."
                                icon={Book}
                            />
                            <ServiceCard
                                title="Workshops & Events"
                                description="Specialized workshops by international athletes and regular community fitness events."
                                icon={Users}
                            />
                            <ServiceCard
                                title="Cali Games"
                                description="Northeast India’s premier calisthenics sports and entertainment festival, combining street culture, competitions, and fitness challenges."
                                icon={Dumbbell}
                            />
                        </div>
                    </div>
                    {/* <CalisthenicsAnimation><DumbbellIcon size={90}/></CalisthenicsAnimation> */}
                </section>

                {/* Multi-Layer Scrolling Section */}
                {/* <MultiLayerScrollSection /> */}

                {/* Testimonials Section */}
                    <section ref={sectionRefs.testimonials} id="testimonials" className="pt-32 lg:px-20 pb-28 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center"
        >
            What Our Clients Say
        </motion.h2>
        
        {/* Swiper Carousel */}
        <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {[
                {
                    name: "Mridusmita Das",
                    review: "The only calisthenics studio of northeast. The founder of the studio Bhaskar himself is a prodigy in this field. His contributions not only in Calisthenics in the state but also of transforming the lives of many people across various age groups and professions is commendable . Highly recommend Califit Calisthenics if you really want to make a change in your life and of course your health.",
                },
                {
                    name: "Suryaprakash Medhi",
                    review: "First and the only studio dedicated to Calisthenics in Guwahati. Mr.Bhaskar Saud is a very dedicated and motivating coach you will love training with him. A beautiful well maintained small studio space. Join now to learn a new form of body weight training which you can do anywhere anytime without any gym equipments.",
                },
                {
                    name: "Boris Kalita",
                    review: "An amazing and novel place to get fit! The best part about calisthenics I have experienced is that the strength and skills one builds here is transferable to other activities like running, rock climbing and boxing. This would never have been possible through traditional gym equipment based workouts. Finally, to top it all, one has a very motivated and cool coach (Bhaskar) to guide you through it!",
                },
                {
                    name: "Intaj Ali",
                    review: "It was very nice to see the calisthenics studio in Guwahati and I am taking training in the same studio and the trainer there is very good, please if you are a calisthenics lover then come here without any delay.",
                },
                {
                    name: "Biki Boro",
                    review: "Great place to learn Calisthenics. And one and only Calisthenics Studio / gym in Guwahati with experienced WSWCF ( World Street Workout and Calisthenics Federation ) certified Trainer.",
                },
		{
		   name: "Sridhari Deorah",
		   review: "It's a great place for fitness and you can always look upto to the instructors, they are always pushing you to do better.",
		},
{
                   name: "Rishab Goel",
                   review: "Great place to learn new skills and develop absolute strength. Awesome trainers."
                },
            ].map((client, i) => (
                <SwiperSlide key={i}>
                    <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden h-[280px] flex flex-col justify-between">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9cff01] to-transparent"></div>
                        <div className="flex items-center mb-4">
                            <User size={48} className="text-black mr-4" />
                            <div>
                                <h3 className="font-bold text-lg text-black">{client.name}</h3>
                                <div className="flex text-[#edbb15]">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} size={16} fill="#edbb15" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 overflow-hidden">{`"${client.review}"`}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
</section>
                         


                <section className="relative w-full h-[80vh] overflow-hidden">
                    {/* Video Background */}
                    <img
                        src={bg_hero}
                        alt="Hero Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-8 text-center"
                        >
                            Upcoming Events
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg mb-8 text-center"
                        >
                            Stay tuned for Cali Games 3.0 and our next community workshop!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <a
                                href="/events"
                                className="bg-[#9cff01] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition-colors"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </div>
                </section>


                {/* Footer */}
                <Footer />
            </div>
        </ParallaxProvider >
    )
}
