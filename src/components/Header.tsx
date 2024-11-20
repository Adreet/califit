import React, { useEffect, useRef, useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [, setActiveSection] = useState<string>('home');

  const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    caliGames: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (
          ref.current &&
          ref.current.offsetTop <= scrollPosition &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels: { [key: string]: string } = {
    about: 'About',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    caliGames: 'Cali Games'
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="fixed top-4 inset-x-0 before:absolute before:inset-0 before:max-w-[80rem] before:mx-2 before:lg:mx-auto before:rounded-[70px] after:absolute after:inset-0 after:-z-[1] after:max-w-[80rem] after:mx-2 after:lg:mx-auto after:rounded-[70px] after:bg-black after:bg-opacity-80 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[80rem] w-full md:flex md:items-center md:justify-between md:gap-3 px-4 md:px-2 lg:mx-auto py-0">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} className="h-16 w-16" alt="Logo" />
          </Link>

          <div className="md:hidden pr-2">
            <button
              type="button"
              onClick={toggleMenu}
              className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full text-white"
              aria-expanded={isMenuOpen}
              aria-controls="hs-header-collapse"
              aria-label="Toggle navigation"
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} size-7`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} size-7`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Navigation links for md and larger screens */}
        <div className="hidden text-[13px] md:flex flex-grow justify-end">
          {Object.keys(sectionRefs).map((section) => (
            <Link
              key={section}
              to={`/${section}`}
              className="text-white px-3 py-2 hover:bg-gray-700 rounded"
            >
              {navLabels[section]}
            </Link>
          ))}
          <Link
            to={"/joinus"}
            className="inline-block bg-[#9cff01] text-black px-5 py-2 mr-3 rounded-full font-semibold transition hover:bg-[#8bce00]"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* Dropdown menu outside of the header's rounded corners for small screens */}
      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 bg-black bg-opacity-80 rounded-lg shadow-lg md:hidden">
          <div className="py-2 text-[13px] text-white flex flex-col gap-1">
            {Object.keys(sectionRefs).map((section) => (
              <Link key={section} to={`/${section}`} className="block px-4 py-2 hover:bg-gray-700">
                {navLabels[section]}
              </Link>
            ))}
            <Link
              to={"/joinus"}
              className="inline-block bg-[#9cff01] text-black px-5 py-2 mx-3 rounded-full font-semibold transition hover:bg-[#8bce00]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
