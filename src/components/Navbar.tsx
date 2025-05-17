import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Notebook as Robot, Info, BookOpen, Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  dropdownItems?: { title: string; link: string }[];
  link?: string;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    title: 'Home',
    icon: <Robot size={20} />,
  },
  {
    id: 'about',
    title: 'Project Hub',
    icon: <Info size={20} />,
    link: '/project-hub',
  },
  {
    id: 'courses',
    title: 'Courses',
    icon: <BookOpen size={20} />,
    dropdownItems: [
      { title: 'RoboSpark Juniors', link: '/courses/robospark-juniors' },
      { title: 'RoboBits Explorer', link: '/courses/robobits-explorer' },
      { title: 'RoboMasters Builder', link: '/courses/robomasters-builder' },
      { title: 'RoboCoders Pro', link: '/courses/robocoders-pro' },
      { title: 'RoboNet Innovators', link: '/courses/robonet-innovators' },
      { title: 'RoboBrains AI', link: '/courses/robobrains-ai' },
    ],
  },
  {
    id: 'contact',
    title: 'Reach Out Us',
    icon: <Phone size={20} />,
    link: '/reach-out-us',
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }
    closeDropdowns();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="bg-white/90 backdrop-blur-sm text-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10" />
            </div>

            <button
              className="lg:hidden text-black p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.id === 'home' ? (
                    <a
                      href="#home"
                      onClick={handleHomeClick}
                      className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600/30 text-black"
                    >
                      {item.icon}
                      <span className="ml-1">{item.title}</span>
                    </a>
                  ) : item.link ? (
                    <Link
                      to={item.link}
                      className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600/30 text-black"
                      onClick={closeDropdowns}
                    >
                      {item.icon}
                      <span className="ml-1">{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600/30 text-black"
                        onClick={() => toggleDropdown(item.id)}
                      >
                        {item.icon}
                        <span className="ml-1">{item.title}</span>
                      </button>
                      {activeDropdown === item.id && item.dropdownItems && (
                        <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-md shadow-lg py-1 z-10 border border-gray-700">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.link}
                              className="block px-4 py-2 text-sm hover:bg-blue-600/30 transition-colors duration-200 text-white"
                              onClick={closeDropdowns}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Marquee bar - part of fixed header */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 h-10 flex items-center overflow-hidden">
        <marquee className="text-blue-800 font-semibold text-sm md:text-base tracking-wide">
          Raising AI - Making Automations - Navigating Aspirations
        </marquee>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm text-white">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.id === 'home' ? (
                    <a
                      href="#home"
                      onClick={handleHomeClick}
                      className="flex items-center w-full px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600/30 text-white"
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </a>
                  ) : item.link ? (
                    <Link
                      to={item.link}
                      className="flex items-center w-full px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600/30 text-white"
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center w-full px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600/30 text-white"
                        onClick={() => toggleDropdown(item.id)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </button>
                      {activeDropdown === item.id && item.dropdownItems && (
                        <div className="pl-8 mt-1 mb-2 border-l-2 border-blue-500">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.link}
                              className="block px-4 py-2 text-sm hover:bg-blue-600/30 transition-colors duration-200 text-white"
                              onClick={toggleMenu}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
