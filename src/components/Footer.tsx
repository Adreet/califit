import { Facebook, Instagram } from 'lucide-react'
import logo_black from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                            <img src={logo_black} className="h-20 w-20"/>
                                <p className="">Empowering fitness enthusiasts through world-class calisthenics training and events.</p>
                            </div>
                            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                                <h4 className="text-lg font-semibold mb-4 text">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><Link to={"/terms-of-use"} className="hover:text-[#9cff01] transition-colors ">Terms of Use</Link></li>
                                    <li><Link to={"/privacy-policy"} className="hover:text-[#9cff01] transition-colors ">Privacy Policy</Link></li>
                                    <li><Link to={"/disclaimer"} className="hover:text-[#9cff01] transition-colors ">Disclaimer</Link></li>
                                    <li><Link to={"/shipping-and-delivery-policy"} className="hover:text-[#9cff01] transition-colors ">Shipping and Delivery Policy</Link></li>
                                    <li><Link to={"/refund-and-cancellation-policy"} className="hover:text-[#9cff01] transition-colors ">Refund and Cancellation Policy</Link></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3">
                                <h4 className="text-lg font-semibold mb-4 ">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/califit_calisthenics/" target="_blank"  className=" hover:text-[#9cff01] transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="https://www.facebook.com/people/Califit-Calisthenics-Studio/100083157409209/" target="_blank"  className=" hover:text-[#9cff01] transition-colors">
                                        <Facebook size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white text-center text-white">
                            <p>&copy; {new Date().getFullYear()} BitBrew Tech </p>
                        </div>
                    </div>
                </footer>
  )
}

export default Footer
