// This component assumes Tailwind CSS is already set up in your project
"use client";


const projects = [
 {
  title: "JavaScript",
  emoji: "🧩",
  description: "Built 5+ interactive projects focused on game logic, puzzles, and DOM manipulation using vanilla JavaScript.",
  gradient: "from-green-300 to-blue-500",
  skills: "JavaScript, DOM, HTML, CSS",
  level: "Major",
  link: "https://javascript-minor-projects-txop.vercel.app/",
},


  {
    title: "Taleverse",
    emoji: "📖",
    description: "Collaborative storytelling app",
    gradient: "from-purple-400 to-indigo-500",
    skills: "React, Appwrite, login/signup, Redux, Tailwind Css",
    level: "Major",
    link: "https://taleverse.vercel.app/",
  },
  {
    title: "Google News Quiz",
    emoji: "📰",
    description: "UX Case Study on adding quizzes",
    gradient: "from-yellow-300 to-orange-400",
    skills: "Figma, UX Research",
    level: "Major",
    link: "https://www.behance.net/gallery/223073755/Case-Study-Google-News-with-a-Take-a-Quiz-Feature",
  },
  {
    title: "Let's Plan",
    emoji: "📝",
    description: "Collaborative planner",
    gradient: "from-green-300 to-teal-400",
    skills: "React, Redux",
    level: "Major",
    link: "https://lets-plan-gamma.vercel.app/",
  },
  {
    title: "Portfolio",
    emoji: "💼",
    description: "Personal developer portfolio",
    gradient: "from-blue-400 to-cyan-500",
    skills: "Next.js, Tailwind",
    level: "Major",
    link: "https://my-portfolio-kohl-theta-49.vercel.app/",
  },
  {
    title: "Decathlon Review",
    emoji: "🎽",
    description: "UX redesign for reviews",
    gradient: "from-pink-400 to-rose-500",
    skills: "Wireframing, UI Design",
    level: "Minor",
    link: "https://www.behance.net/gallery/221465255/Decathlon-Review-",
  },
  {
    title: "Figma Portfolio",
    emoji: "🎨",
    description: "Collection of UI projects",
    gradient: "from-orange-400 to-yellow-500",
    skills: "Figma, UI Systems",
    level: "Minor",
    link: "https://www.figma.com/@akshi",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="dashboard-card bg-white/10 relative p-6 text-center flex flex-col justify-center items-center  rounded-3xl backdrop-blur-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
    >
      <div
        className={`card-icon text-5xl rounded-2xl p-6 mb-4 text-white bg-gradient-to-br ${project.gradient} shadow-lg`}
      >
        {project.emoji}
      </div>
      <h3 className="card-title text-xl font-semibold text-white mb-1">
        {project.title}
      </h3>
      <p className="card-description text-sm text-white/70 mb-2">
        {project.description}
      </p>
      <span className="skill-label text-xs text-white/60">
        Skills: {project.skills}
      </span>
      <div className="card-tag tag mt-3 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
        {project.level}
      </div>
    </a>
  );
};

const ProjectDashboard = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden px-4 py-12">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-2">
            My Projects
          </h1>
          <p className="text-white/70 text-sm">
            A showcase of major and minor works from design to development
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <ProjectCard project={proj} key={i} />
          ))}
        </div>
      </div>

      {/* Background floating orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-[15%] right-[-5%] w-[200px] h-[200px] rounded-full bg-pink-400/10 animate-ping blur-2xl"></div>
    </div>
  );
};

export default ProjectDashboard;
