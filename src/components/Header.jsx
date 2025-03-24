import { motion } from 'framer-motion';
import React from 'react';
import {
  FaBehance,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  

  // Social media links
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: "https://github.com/akshi009", 
      color: "hover:text-gray-200" 
    },
    { 
      icon: <FaLinkedin />, 
      href: "https://www.linkedin.com/in/akshi-jain-270631202/", 
      color: "hover:text-blue-500" 
    },
    { 
      icon: <FaBehance />, 
      href: "https://www.behance.net/akshijain7", 
      color: "hover:text-blue-600" 
    }
  ];

 

  return (
    <header className="pt-6 fixed top-0 w-full z-50 pb-8 bg-[#12121a] px-6 md:px-12 flex justify-between items-center">
      {/* Logo with Animated Hover Effect */}
      <Link to="/" className="focus:outline-none">
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
          className="text-[#B5A8D5] text-2xl"
        >
          Projects
        </motion.div>
      </Link>
      
      {/* Navigation Links */}
      
      
      {/* Social Media Icons */}
      <div className="flex items-center gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-[#B5A8D5] ${social.color} 
              transition-all duration-300 text-xl
            `}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, 0]
            }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </header>
  )
}

export default Header