'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import styles from './page.module.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'academics'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Scroll animations
      const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>KP</div>
          
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? styles.active : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? styles.active : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? styles.active : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#academics" 
                className={activeSection === 'academics' ? styles.active : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('academics'); }}
              >
                Academics
              </a>
            </li>
            <li>
              <a href="/Kshitijpanchal_DS.pdf" download="Kshitijpanchal_DS.pdf" className={styles.resumeBtn}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              HEY, I&apos;M <span className={styles.highlight}>Kshitij Surendra Panchal</span>
            </h1>
            <p className={styles.heroDescription}>
              A Data Scientist passionate about Deep Learning and Analytics. 
              I specialize in transforming complex data into actionable stories through 
              advanced modeling and dynamic visualization.
            </p>
            <p className={styles.location}>📍 Mumbai, India</p>
            
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.primaryBtn} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                View My Work
              </a>
              <a href="/Kshitijpanchal_DS.pdf" download="Kshitijpanchal_DS.pdf" className={styles.secondaryBtn}>
                <FaDownload /> Download Resume
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://github.com/Kshitij-p14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kshitij-panchal-5707b92a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:kshitijpanchal3145@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className={styles.heroImageContainer}>
            <div className={styles.imageWrapper}>
              <img src="/profile.jpg" alt="Kshitij Panchal" className={styles.heroImage} />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} scroll-fade-in`}>About Me</h2>
          
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutText} scroll-slide-left`}>
              <p>
                I&apos;m a Data Scientist with a Master&apos;s degree from NMIMS, Mumbai, 
                specializing in Deep Learning, NLP, and Data Analytics. My passion lies in 
                building intelligent systems that solve real-world problems.
              </p>
              <p>
                With expertise in Python, AWS, and various ML frameworks, I&apos;ve developed 
                projects ranging from real-time accident detection systems to advanced RAG 
                implementations. I believe in the power of data to drive meaningful insights 
                and create impact.
              </p>
            </div>

            <div className={`${styles.skillsContainer} scroll-slide-right`}>
              <h3>Technical Toolkit</h3>
              <div className={styles.skillsGrid}>
                <span className={styles.skillPill}>Python</span>
                <span className={styles.skillPill}>AWS</span>
                <span className={styles.skillPill}>SQL</span>
                <span className={styles.skillPill}>Power BI</span>
                <span className={styles.skillPill}>Tableau</span>
                <span className={styles.skillPill}>Deep Learning</span>
                <span className={styles.skillPill}>NLP</span>
                <span className={styles.skillPill}>TensorFlow</span>
                <span className={styles.skillPill}>PyTorch</span>
                <span className={styles.skillPill}>Streamlit</span>
              </div>
            </div>
          </div>

          <div className={`${styles.education} scroll-fade-in`}>
            <h3>Education</h3>
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h4>Master of Data Science</h4>
                <span className={styles.duration}>2024 - 2026</span>
              </div>
              <p>NMIMS, Mumbai | CGPA: 8.0/10</p>
            </div>
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h4>Bachelor of Science in Mathematics</h4>
                <span className={styles.duration}>2021 - 2024</span>
              </div>
              <p>Wilson College | CGPA: 7.40/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} scroll-fade-in`}>Featured Projects</h2>
          
          <div className={styles.projectsGrid}>
            <div className={`${styles.projectCard} scroll-fade-in`}>
              <div className={styles.projectHeader}>
                <h3>NETRAI: Road Accident Detection</h3>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/Kshitij-p14" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
                Developed a real-time system using YOLOv12, achieving 83.3% F1-Score. 
                Integrated Gemini 2 Flash for severity analysis and Firebase for real-time 
                data management.
              </p>
              <div className={styles.techStack}>
                <span>YOLOv12</span>
                <span>Firebase</span>
                <span>Gemini 2 Flash</span>
                <span>Deep Learning</span>
              </div>
            </div>

            <div className={`${styles.projectCard} scroll-fade-in`}>
              <div className={styles.projectHeader}>
                <h3>Qwen-Based RAG System</h3>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/Kshitij-p14" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
                AI-powered system for PDF/DOC analysis with 92% retrieval precision using 
                ChromaDB and MiniLM-L6-v2 embeddings. Built a multimodal interface for 
                seamless document interaction.
              </p>
              <div className={styles.techStack}>
                <span>Qwen2.5-VL</span>
                <span>Docling</span>
                <span>ChromaDB</span>
                <span>Streamlit</span>
              </div>
            </div>

            <div className={`${styles.projectCard} scroll-fade-in`}>
              <div className={styles.projectHeader}>
                <h3>Flipkart Marketing Spend Optimization</h3>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/Kshitij-p14" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className={styles.projectDescription}>
                Built interactive dashboards to analyze ROI, ROAS, and CPA, recommending 
                budget reallocations for high-value segments. Improved marketing efficiency 
                by 15%.
              </p>
              <div className={styles.techStack}>
                <span>Power BI</span>
                <span>Tableau</span>
                <span>Data Modeling</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className={styles.experience}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Academics</h2>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2024 - Present</div>
              <div className={styles.timelineContent}>
                <h3>Data Science Student</h3>
                <h4>NMIMS, Mumbai</h4>
                <p>
                  Pursuing Master&apos;s in Data Science, focusing on Deep Learning, 
                  NLP, and advanced analytics. Working on cutting-edge projects in 
                  computer vision and natural language processing.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2021 - 2024</div>
              <div className={styles.timelineContent}>
                <h3>Mathematics Student</h3>
                <h4>Wilson College</h4>
                <p>
                  Completed Bachelor&apos;s in Mathematics with strong foundation in 
                  statistical analysis, probability theory, and mathematical modeling. 
                  Applied mathematical concepts to data science problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Let&apos;s build something impactful together!</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/Kshitij-p14" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kshitij-panchal-5707b92a5/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:kshitijpanchal3145@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p className={styles.copyright}>© 2026 Kshitij Panchal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
