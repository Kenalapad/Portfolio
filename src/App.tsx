import { useState, useEffect } from "react";
import "./App.css";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

interface Skill {
  category: string;
  items: string[];
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["TypeScript", "Socket.io", "PostgreSQL", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      description:
        "Analytics dashboard for tracking portfolio performance with interactive charts and real-time data visualization.",
      tech: ["React", "D3.js", "TypeScript", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "TailwindCSS",
        "Redux",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Python",
        "REST APIs",
      ],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "AWS", "Vite", "Webpack", "Jest"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#home" className="logo">
            Portfolio
          </a>
          <ul className="nav-links">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    className={activeSection === section ? "active" : ""}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>
              Hi, I'm <span className="highlight">Kenneth Lester Alapad</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p>
              Building digital experiences with modern technologies.
              Specializing in React, TypeScript, and scalable web applications.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection("projects")}>
                View Work
              </button>
              <button onClick={() => scrollToSection("contact")}>
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="about" className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications. I specialize in creating
                performant, accessible, and user-friendly applications using
                modern technologies.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical articles, or exploring new
                technologies to stay ahead of industry trends.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="number">5+</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="number">100%</span>
                <span className="label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="projects" className="projects-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="ticks"></div>

        <section id="skills" className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ticks"></div>

        <section id="contact" className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
            <div className="contact-info">
              <a href="mailto:alapadkennethlester@example.com">alapadkennethlester@example.com</a>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Kenneth Lester Alapad. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
