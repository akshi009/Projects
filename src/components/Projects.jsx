"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaFilter, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectGallery = () => {
  // Project data with enhanced metadata
  const projects = [
    {
      id: 1,
      title: "Taleverse",
      description: "A Space for Storytellers",
      image: "/taleverse.png",
      category: "major",
      technology: "react",
      link: "https://taleverse.vercel.app/",
      gradient: "from-purple-500 to-indigo-600",
      
      features: ["Collaborative Writing", "Story Management", "User Profiles"]
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Modern & Responsive Showcase",
      link: "https://my-portfolio-kohl-theta-49.vercel.app/",
      image: "/portfolio.png",
      category: "major",
      technology: "nextjs",
      gradient: "from-blue-500 to-cyan-400",
      
      features: ["Responsive Design", "Interactive Sections", "Modern UI"]
    },
    {
      id: 3,
      title: "Let's Plan",
      description: "Interactive Task Manager",
      link: 'https://lets-plan-gamma.vercel.app/',
      image: "/Let's Plan.png",
      category: "major",
      technology: "react",
      gradient: "from-green-400 to-teal-500",
      
      features: ["Task Tracking", "Collaborative Planning", "Priority Management"]
    },
    {
      id: 4,
      title: "Decathlon Review",
      description: "UX Case Study",
      link: 'https://www.behance.net/gallery/221465255/Decathlon-Review-',
      image: "/decathlon.png",
      category: "minor",
      technology: "ui/ux",
      gradient: "from-pink-500 to-rose-500",
      
      features: ["User Research", "Wireframing", "Design Critique"]
    },
    {
      id: 5,
      title: "Case Study: Google News with a “Take a Quiz” Feature",
      description: "UX Case Study",
      link: "https://www.behance.net/gallery/223073755/Case-Study-Google-News-with-a-Take-a-Quiz-Feature",
      image: "/GoogleNews.png",
      category: "major",
      technology: "ui/ux",
      gradient: "from-orange-400 to-yellow-500",
      
      features: ["Visual Design", "User Research", "User Experience Enhancement"]
    },
    {
      id: 6,
      title: "Figma Portfolio",
      description: "Design Collection",
      link: "https://www.figma.com/@akshi",
      image: "/figma.png",
      category: "minor",
      technology: "ui/ux",
      gradient: "from-orange-400 to-yellow-500",
      
      features: ["Visual Design", "UI Components", "Design System"]
    }
  ];

  // State for filtering and animations
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter projects based on category or technology
  const filteredProjects = projects.filter((project) => {
    return activeFilter === "all" || 
           project.category === activeFilter || 
           project.technology === activeFilter;
  });

  return (
    <div className="min-h-screen mb-20 pb-10 p-6 pt-30 md:pt-28 md:p-12 bg-[#12121a] text-white">
      <div className="max-w-8xl mx-auto">
        {/* Animated Header */}
        

        {/* Filters with Icons */}
        <div className="flex overflow-x-auto  px-5 md:justify-center gap-3 mb-12">
          {["all", "major", "minor", "react", "nextjs", "ui/ux"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-2
                ${activeFilter === filter 
                  ? "bg-[#4D55CC] text-white shadow-md" 
                  : "bg-[#2A2A4A] text-[#B5A8D5] hover:bg-[#3A3A5A]"}
              `}
            >
              <FaFilter className="mr-2" />
              {filter === "all" ? "All" : 
               filter === "ui/ux" ? "UI/UX" :
               filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with Animations */}
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 "
                >
                 
                    {/* Image Container with Hover Effects */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <div className={`absolute inset-0 ${project.bgColor} opacity-50 z-10`} />
                      
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill   transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback Image */}
                      <div 
                        className={`absolute inset-0 ${project.bgColor} hidden items-center justify-center text-white p-4`}
                      >
                        <span className="text-xl font-bold">{project.title}</span>
                      </div>
                      <div className="absolute right-0 top-0 bg-gray-700/80 p-2">{project.technology}</div>
                    </div>
                    
                    {/* Detailed Project Overlay */}
                    <div className={`
                      absolute inset-0 p-6 flex flex-col justify-end 
                      bg-gradient-to-t from-black/90 to-transparent 
                      ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                      transition-opacity duration-300 z-20
                    `}>
                      <div >
                        {/* <span className="px-2 py-1 bg-white/20 rounded-full text-xs uppercase tracking-wider flex items-center">
                          <FaTag className="mr-2" />
                          {project.technology}
                        </span> */}
                        <div className="flex justify-between">
                        <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
                        <div className="text-white hover:text-[#4D55CC] transition-colors">
                           <Link 
                    to={project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2 h-full flex"
                  >
                          <FaLink size={20} />
                          LINK
                          </Link>
                        </div>
                      </div>
                      
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                      
                      {/* Project Features */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.features.map((feature, index) => (
                          <span 
                            key={index} 
                            className="bg-[#2A2A4A] text-[#B5A8D5] px-2 py-1 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                 
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-2xl text-[#B5A8D5] mb-6">No projects match the selected filter</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter("all")}
                  className="px-6 py-3 bg-[#4D55CC] text-white rounded-lg hover:bg-[#7A73D1] transition-colors shadow-md flex items-center justify-center mx-auto"
                >
                  <FaFilter className="mr-2" />
                  View All Projects
                </motion.button>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectGallery;