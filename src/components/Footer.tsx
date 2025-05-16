import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Notebook as Robot } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NexMinds
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Where Intelligence Meets Innovation. We are dedicated to providing the best robotics education for all ages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={handleHomeClick}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <Link to="/project-hub" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  ProjectHub
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/reach-out-us" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Reach Out Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  3rd floor, 25/529, Rd Number 1, opp. GHMC park, above HDFC Bank, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+91 8639189175</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@nexminds.in</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/synaptiqlabs/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/synaptiqlabs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NexMinds. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
