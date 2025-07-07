import React, { useState, useEffect } from 'react';
import { Briefcase, User, FileText, Linkedin, Github, Mail, Phone, MapPin, Award, Lightbulb, Code, Users, Brain, Tv, Puzzle, Bot, BarChart2, Gamepad2, Cpu, Server, Cloud, Settings, Star, ExternalLink, ChevronsRight, Menu, X, Download } from 'lucide-react';

// Tailwind CSS is assumed to be set up in your project.
// If not, please follow the Tailwind CSS installation guide for React.

const portfolioData = {
  name: "Adam Zhu",
  tagline: "Computer Science Student | Software Developer | Competitive Programmer and Mentor",
  email: "adamzhu314@gmail.com",
  phone: "469-318-1836",
  location: "Dallas, TX",
  linkedin: "https://www.linkedin.com/in/adamzhu314/",
  github: "https://github.com/a-fakeusername",
  education: {
    degree: "Bachelor of Science, Computer Science",
    university: "The University of Texas at Austin",
    gpa: "3.9/4.0",
    graduation: "Expected Graduation - May 2028",
  },
  aboutMe: {
    intro: "Highly motivated and results-oriented Computer Science student at The University of Texas at Austin with a strong foundation in software development, AI, and full-stack technologies. Passionate about solving complex problems and building innovative solutions. Proven ability to lead projects, collaborate in teams, and deliver high-quality software.",
    journey: "My fascination with technology began early, evolving from simple Roblox games to full-scale websites. I thrive on the challenge of learning new technologies and applying them to create impactful projects. Each project, from game development to AI bots, has been a stepping stone in honing my skills and broadening my perspective.",
    passions: "Beyond coding, I'm deeply interested in competitive programming, which sharpens my algorithmic thinking. I also enjoy mentoring others in their coding journey, finding it incredibly rewarding to share knowledge and foster growth. In my free time, I explore new developments in AI and game design, always looking for the next exciting challenge.",
    aspirations: "I aim to contribute to cutting-edge technology that makes a tangible difference. Whether it's advancing AI research, developing scalable software solutions, or innovating in game development, I'm eager to apply my skills to create meaningful impact and continuously grow as a software engineer.",
  },
  experience: [
    {
      id: 1,
      role: "USA Computing Olympiad Mentor",
      company: "Self-Employed/Volunteer",
      dates: "Aug 2024 - Present",
      description: [
        "Guided Silver students through advanced algorithmic techniques including binary search and graphs.",
        "Improved implementation efficiency, increasing students' average coding speed for Silver problems by 20%.",
      ],
      skills: ["C++", "Java", "Python", "Algorithms", "Mentorship"],
      icon: <Users className="w-8 h-8 text-sky-400" />
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Freelance/Personal Projects",
      dates: "Mar 2023 - Jan 2025",
      description: [
        "Engineered Arcane Odyssey Guides, surpassing 3 million views by optimizing frontend performance with React and Tailwind CSS and designing an algorithm that sorts 40 billion combinations in under 2 seconds.",
        "Designed and developed Monkey Sense, improving students' mental math speed by 200% by building a random question generator with a multiplayer duel system, user authentication, and leaderboard database using Express.js backend, WebSockets, and PostgreSQL.",
      ],
      skills: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind", "PostgreSQL", "Express.js", "WebSockets"],
      icon: <Code className="w-8 h-8 text-sky-400" />
    },
    {
      id: 3,
      role: "Roblox and Unity Game Developer",
      company: "Freelance/Personal Projects",
      dates: "Mar 2020 - Oct 2024",
      description: [
        "Published three Roblox titles (Dig To India, Monster Survival, Cave Mining) amassing 1M visits and 10% 7-day retention through data-driven design and robust server security by encapsulating client-server communication.",
        "Developed Geometry Battleground, CogQuest, The Past and The Curious, and Together In Spirit using Unity, implementing object-oriented methodology with a 4-tier class hierarchy, reusing over 10,000 lines of code.",
        "Achieved #1 Overall and #1 Gameplay in UT EGaDS! High Score Game Jam, #1 People's Choice and #2 Best Narrative in Texas Game Jam, and 3rd place in BPA Software Engineering.",
      ],
      skills: ["C#", "Lua", "Unity", "Roblox Studio", "GitHub", "Game Design", "OOP"],
      icon: <Gamepad2 className="w-8 h-8 text-sky-400" />
    },
  ],
  projects: [
    {
      id: 1,
      title: "Arcane Odyssey Guides",
      description: "A high-performance web application providing guides for the game Arcane Odyssey, achieving over 3 million views. Features an advanced algorithm for sorting 40 billion combinations rapidly.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Algorithm Design"],
      link: "https://aoguides.myalt.dev/",
      icon: <Tv className="w-8 h-8 text-teal-400" />
    },
    {
      id: 2,
      title: "Monkey Sense",
      description: "An interactive platform designed to enhance mental math skills, featuring a random question generator, multiplayer duels, user authentication, and a leaderboard.",
      technologies: ["Express.js", "WebSockets", "PostgreSQL", "JavaScript", "HTML/CSS"],
      link: "https://monkeysense.me",
      icon: <Brain className="w-8 h-8 text-teal-400" />
    },
    {
      id: 3,
      title: "Roblox Game Portfolio",
      description: "Includes titles like 'Dig To India', 'Monster Survival', and 'Cave Mining', which collectively gained 1 million visits. Focused on data-driven design and server security.",
      technologies: ["Lua", "Roblox Studio", "Server Security"],
      link: "https://www.roblox.com/games/12332996356/Dig-to-India",
      icon: <Gamepad2 className="w-8 h-8 text-teal-400" />
    },
    {
      id: 4,
      title: "Unity Game Portfolio",
      description: "Developed multiple games including 'Together in Spirit', 'The Past and the Curious', 'Geometry Battleground', 'CogQuest'. Emphasized object-oriented programming and code reusability. Won #1 People's Choice for Texas Game Jam and #1 Overall.",
      technologies: ["C#", "Unity", "OOP", "Game Design"],
      link: "https://myaltaccountsthis.itch.io/together-in-spirit",
      icon: <Puzzle className="w-8 h-8 text-teal-400" />
    },
    {
      id: 5,
      title: "Word Bomb AI Bot",
      description: "An AI bot capable of real-time puzzle solving for Word Bomb, utilizing Computer Vision and Tesseract OCR for high accuracy text recognition.",
      technologies: ["Python", "NumPy", "OpenCV", "Tesseract OCR", "Computer Vision"],
      link: "https://github.com/myaltaccountsthis/word-bomb-bot",
      icon: <Bot className="w-8 h-8 text-teal-400" />
    },
    {
      id: 6,
      title: "Tetris AI Bot",
      description: "A Reinforcement Learning-based AI bot trained to play Tetris, significantly outperforming previous benchmarks (20x). Features a Vue.js frontend and Flask backend. Trained for 400M steps, (100 hours).",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Vue.js", "Flask"],
      link: "https://github.com/a-fakeusername/ai-tetris",
      icon: <Cpu className="w-8 h-8 text-teal-400" />
    },
    {
      id: 7,
      title: "Clash Royale AI Deck Rater",
      description: "A machine learning model that rates Clash Royale decks, with significantly improved accuracy through neural network optimization and a custom-curated dataset.",
      technologies: ["Python", "NumPy", "Pandas", "Keras", "Machine Learning", "JavaScript"],
      link: null,
      icon: <BarChart2 className="w-8 h-8 text-teal-400" />
    },
    {
      id: 8,
      title: "LeetCode Discord Bot",
      description: "A collaborative project building a Discord bot for LeetCode users, featuring PostgreSQL caching for efficient API call management.",
      technologies: ["Python", "GraphQL", "PostgreSQL", "Matplotlib", "discord.py"],
      link: "https://github.com/myaltaccountsthis/lc-bot",
      icon: <Server className="w-8 h-8 text-teal-400" />
    },
  ],
  skills: [
    { category: "Languages", items: ["Java", "C++", "JavaScript/TypeScript", "Python", "C#", "SQL", "Lua", "C", "HTML/CSS", "GraphQL"], icon: <Code className="w-6 h-6 text-sky-400" /> },
    { category: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "NumPy", "Pandas", "Keras", "PyTorch", "OpenCV", ".NET"], icon: <Settings className="w-6 h-6 text-sky-400" /> },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "PostgreSQL", "Unity", "Roblox Studio", "Unreal Engine", "WSL", "Agile/SCRUM", "REST APIs", "Postman", "Linux"], icon: <Cloud className="w-6 h-6 text-sky-400" /> },
    { category: "Topics & Concepts", items: ["Software Engineering", "AI", "Machine Learning", "Computer Vision", "Database Management", "Full-Stack Development", "Algorithm Design", "Game Development"], icon: <Lightbulb className="w-6 h-6 text-sky-400" /> },
  ],
  awards: [
    { id: 1, title: "International Collegiate Programming Contest Regionals (Sponsored by Jane Street)", detail: "5th place (using C++)", icon: <Award className="w-6 h-6 text-amber-400" /> },
    { id: 2, title: "Online Coding Competitions", detail: "LeetCode Guardian (top 0.5%), Codeforces Candidate Master (top 3%) (using C++, Algorithms)", icon: <Star className="w-6 h-6 text-amber-400" /> },
    { id: 3, title: "UT Dallas Battle of the Brains (Sponsored by State Farm)", detail: "1st Place Advanced Division (using Java)", icon: <Award className="w-6 h-6 text-amber-400" /> },
    { id: 4, title: "UIL State - Computer Science", detail: "2x 1st Place Team, 3rd Individual (using Java)", icon: <Star className="w-6 h-6 text-amber-400" /> },
    { id: 5, title: "UIL State - Number Sense", detail: "4th Place Team, 8th Individual (Mental Math)", icon: <Star className="w-6 h-6 text-amber-400" /> },
  ],
};

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}
const Navbar = ({ setCurrentPage, currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Overview', page: 'home', icon: <Briefcase className="w-5 h-5 sm:mr-2" /> },
    { name: 'About Me', page: 'about', icon: <User className="w-5 h-5 sm:mr-2" /> },
    { name: 'Resume', page: 'resume', icon: <FileText className="w-5 h-5 sm:mr-2" /> },
  ];

  return (
    <nav className="bg-slate-800 text-slate-100 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-sky-400 hover:text-sky-300 transition-colors cursor-pointer" onClick={() => setCurrentPage('home')}>
              {portfolioData.name}
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.page)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                    ${currentPage === item.page
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white transform hover:scale-105'
                    }`}
                >
                  {item.icon} <span className="hidden sm:inline">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => { setCurrentPage(item.page); setIsOpen(false); }}
                className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out
                  ${currentPage === item.page
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
              >
                {item.icon} <span className="ml-2">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-800 text-slate-400 py-8 mt-12 border-t border-slate-700">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      <p className="text-sm mt-1">Built with React & Tailwind CSS.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Linkedin /></a>
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Github /></a>
        <a href={`mailto:${portfolioData.email}`} className="hover:text-sky-400 transition-colors"><Mail /></a>
      </div>
    </div>
  </footer>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
}
const Section = ({ title, children, icon }: SectionProps) => (
  <section className="py-12 animate-fadeIn">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        {icon && React.cloneElement(icon, { className: "w-8 h-8 mr-3 text-sky-400" })}
        {title}
      </h2>
      {children}
    </div>
  </section>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-sky-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

const Hero = () => (
  <div className="bg-slate-900 text-slate-100 py-20 animate-fadeIn">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        {portfolioData.name}
      </h1>
      <p className="text-xl md:text-2xl text-sky-400 mb-8">{portfolioData.tagline}</p>
      <div className="flex justify-center space-x-6 mb-8">
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors transform hover:scale-110"><Linkedin size={28} /></a>
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors transform hover:scale-110"><Github size={28} /></a>
        <a href={`mailto:${portfolioData.email}`} className="text-slate-300 hover:text-sky-400 transition-colors transform hover:scale-110"><Mail size={28} /></a>
        <a href={`tel:${portfolioData.phone}`} className="text-slate-300 hover:text-sky-400 transition-colors transform hover:scale-110"><Phone size={28} /></a>
      </div>
      <p className="text-slate-400 flex items-center justify-center">
        <MapPin size={20} className="mr-2 text-sky-500" /> {portfolioData.location}
      </p>
    </div>
  </div>
);

interface AboutShortProps {
  setCurrentPage: (page: string) => void;
}
const AboutShort = ({ setCurrentPage }: AboutShortProps) => (
  <Section title="About Me" icon={<User />}>
    <Card>
      <p className="text-slate-300 leading-relaxed mb-4">
        {portfolioData.aboutMe.intro.substring(0, 200)}...
      </p>
      <button
        onClick={() => setCurrentPage('about')}
        className="inline-flex items-center text-sky-400 hover:text-sky-300 font-medium transition-colors group"
      >
        Read More <ChevronsRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </Card>
  </Section>
);

interface ExperienceItemProps {
  item: {
    id: number;
    role: string;
    company: string;
    dates: string;
    description: string[];
    skills: string[];
    icon: React.ReactElement;
  };
}
const ExperienceItem = ({ item }: ExperienceItemProps) => (
  <Card className="mb-6">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 pt-1">{item.icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-sky-400">{item.role}</h3>
        <p className="text-slate-400 text-sm mb-1">{item.company} | {item.dates}</p>
        <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
          {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.skills.map(skill => (
            <span key={skill} className="bg-sky-700 text-sky-200 px-2 py-1 text-xs rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

interface ProjectItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string | null;
    icon: React.ReactElement;
  };
}
const ProjectItem = ({ item }: ProjectItemProps) => (
  <Card>
    <div className="flex items-start space-x-4 mb-3">
       <div className="flex-shrink-0 pt-1">{item.icon}</div>
      <h3 className="text-xl font-semibold text-teal-400">{item.title}</h3>
    </div>
    <p className="text-slate-300 mb-3 text-sm">{item.description}</p>
    <div className="flex flex-wrap gap-2 mb-3">
      {item.technologies.map(tech => (
        <span key={tech} className="bg-teal-700 text-teal-200 px-2 py-1 text-xs rounded-full">{tech}</span>
      ))}
    </div>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors group">
        View Project <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
      </a>
    )}
  </Card>
);

const SkillsSection = () => (
  <Section title="Skills" icon={<Lightbulb />}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {portfolioData.skills.map(skillCategory => (
        <Card key={skillCategory.category}>
          <h3 className="text-xl font-semibold text-sky-400 mb-3 flex items-center">
            {skillCategory.icon && React.cloneElement(skillCategory.icon, { className: "w-6 h-6 mr-2" })}
            {skillCategory.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillCategory.items.map(item => (
              <span key={item} className="bg-slate-700 text-slate-200 px-3 py-1 text-sm rounded-full">{item}</span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const AwardsSection = () => (
  <Section title="Awards & Recognition" icon={<Award />}>
    <div className="space-y-4">
      {portfolioData.awards.map(award => (
        <Card key={award.id}>
          <div className="flex items-center">
            {award.icon && React.cloneElement(award.icon, { className: "w-6 h-6 mr-3 text-amber-400" })}
            <div>
              <h3 className="text-lg font-semibold text-amber-400">{award.title}</h3>
              <p className="text-slate-300 text-sm">{award.detail}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}
const HomePage = ({ setCurrentPage }: HomePageProps) => (
  <>
    <Hero />
    <AboutShort setCurrentPage={setCurrentPage} />
    <Section title="Work Experience" icon={<Briefcase />}>
      {portfolioData.experience.map(item => <ExperienceItem key={item.id} item={item} />)}
    </Section>
    <Section title="Projects" icon={<Tv />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map(item => <ProjectItem key={item.id} item={item} />)}
      </div>
    </Section>
    <SkillsSection />
    <AwardsSection />
  </>
);

const AboutMePage = () => (
  <div className="animate-fadeIn">
    <Section title="About Me" icon={<User />}>
      <Card className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-sky-400 mb-2">Hello, I'm {portfolioData.name}!</h3>
          <p className="text-slate-300 leading-relaxed">{portfolioData.aboutMe.intro}</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-sky-400 mb-2">My Journey into Tech</h4>
          <p className="text-slate-300 leading-relaxed">{portfolioData.aboutMe.journey}</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-sky-400 mb-2">Passions and Hobbies</h4>
          <p className="text-slate-300 leading-relaxed">{portfolioData.aboutMe.passions}</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-sky-400 mb-2">Future Aspirations</h4>
          <p className="text-slate-300 leading-relaxed">{portfolioData.aboutMe.aspirations}</p>
        </div>
      </Card>
    </Section>
  </div>
);

const ResumePage = () => {
  const { name, email, phone, location, linkedin, github, education, experience, projects, skills, awards } = portfolioData;

  interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactElement;
  }
  const ResumeSection = ({ title, children, icon }: ResumeSectionProps) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-sky-400 mb-4 pb-2 border-b-2 border-sky-700 flex items-center">
        {icon && React.cloneElement(icon, { className: "w-6 h-6 mr-2" })}
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <div className="animate-fadeIn container mx-auto px-4 py-8">
      <Card className="p-6 sm:p-8 md:p-10">
        <a
          href="/Resume.pdf" // This path points to the file in your `public` folder
          download="AdamZhu_Resume.pdf" // This suggests a filename to the user
          className="absolute top-4 right-4 flex items-center gap-2 bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors text-sm"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-100">{name}</h1>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-slate-400 mt-2 text-sm">
            <span><Mail className="inline w-4 h-4 mr-1" />{email}</span>
            <span><Phone className="inline w-4 h-4 mr-1" />{phone}</span>
            <span><MapPin className="inline w-4 h-4 mr-1" />{location}</span>
          </div>
          <div className="flex justify-center items-center gap-4 text-slate-400 mt-2 text-sm">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center"><Linkedin className="inline w-4 h-4 mr-1" />LinkedIn</a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center"><Github className="inline w-4 h-4 mr-1" />GitHub</a>
          </div>
        </div>

        {/* Education */}
        <ResumeSection title="Education" icon={<User />}>
          <h3 className="text-xl font-semibold text-slate-200">{education.degree}</h3>
          <p className="text-slate-300">{education.university}</p>
          <p className="text-slate-400 text-sm">GPA: {education.gpa}</p>
          <p className="text-slate-400 text-sm">{education.graduation}</p>
        </ResumeSection>

        {/* Work Experience */}
        <ResumeSection title="Work Experience" icon={<Briefcase />}>
          {experience.map(exp => (
            <div key={exp.id} className="mb-6">
              <h3 className="text-xl font-semibold text-slate-200">{exp.role}</h3>
              <p className="text-slate-400 text-sm italic">{exp.company} | {exp.dates}</p>
              <ul className="list-disc list-inside text-slate-300 mt-1 space-y-1">
                {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
               <div className="mt-2 flex flex-wrap gap-1">
                {exp.skills.map(skill => (
                  <span key={skill} className="bg-sky-800 text-sky-300 px-2 py-0.5 text-xs rounded">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Projects" icon={<Tv />}>
          {projects.map(proj => (
            <div key={proj.id} className="mb-6">
              <h3 className="text-xl font-semibold text-slate-200">{proj.title}</h3>
              <p className="text-slate-300 mt-1">{proj.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {proj.technologies.map(tech => (
                  <span key={tech} className="bg-teal-800 text-teal-300 px-2 py-0.5 text-xs rounded">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills" icon={<Lightbulb />}>
          {skills.map(skillCat => (
            <div key={skillCat.category} className="mb-3">
              <h4 className="text-lg font-medium text-slate-200 mb-1">{skillCat.category}</h4>
              <p className="text-slate-300 text-sm">{skillCat.items.join(', ')}</p>
            </div>
          ))}
        </ResumeSection>

        {/* Awards */}
        <ResumeSection title="Awards & Recognition" icon={<Award />}>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {awards.map(award => (
              <li key={award.id}>
                <span className="font-semibold text-slate-200">{award.title}:</span> {award.detail}
              </li>
            ))}
          </ul>
        </ResumeSection>

      </Card>
    </div>
  );
};


export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'about', 'resume'

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutMePage />;
      case 'resume':
        return <ResumePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      <style>{`
        // Basic fade-in animation
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        // Smooth scroll behavior
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
