import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Animated typing effect hook
function useTypingEffect(words, speed = 100, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (isPausing) return;

    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);

        if (next === current) {
          // Finished typing — pause before deleting
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(true);
          }, pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);

        if (next === '') {
          // Finished deleting — move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPausing, wordIndex, words, speed, pause]);

  return text;
}

const roles = [
  'Full-Stack Developer',
  '.NET Developer',
  'React Learner',
  'SQL Optimizer',
  'UI Builder',
];

function Home() {
  const typedText = useTypingEffect(roles);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="tag">// hello, world</p>
            <h1 className="hero__name">
              Priyadharshini<br />
              <span className="hero__name--accent">.R</span>
            </h1>
            <div className="hero__role">
              <span className="hero__role-text">{typedText}</span>
              <span className="hero__cursor">|</span>
            </div>
            <p className="hero__desc">
              Full-Stack developer with experience building enterprise MIS applications.
              Currently leveling up React skills — one component at a time.
            </p>
            <div className="hero__cta">
              <Link to="/projects" className="btn btn-primary">
                View Projects →
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="code-block">
              <div className="code-block__header">
                <span className="code-block__dot dot--red"></span>
                <span className="code-block__dot dot--yellow"></span>
                <span className="code-block__dot dot--green"></span>
                <span className="code-block__filename">priyadharshini.js</span>
              </div>
              <pre className="code-block__content">
                <code>{`const developer = {
  name: "Priyadharshini R",
  location: "Chennai, India",
  role: "Full-Stack Dev",
  
  skills: {
    frontend: ["HTML", "CSS",
      "Bootstrap", "React"],
    backend: ["VB.NET", "ASP.NET",
      "REST APIs"],
    database: ["SQL Server",
      "MySQL", "Oracle"],
  },
  
  currently: "Learning React ⚛️",
  open_to: "Frontend roles",
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="hero__ticker">
          <div className="ticker__track">
            {['React', 'VB.NET', 'ASP.NET Core', 'SQL', 'Bootstrap', 'Tailwind CSS',
              'JavaScript', 'Power BI', 'Git', 'REST APIs', 'Entity Framework',
              'React', 'VB.NET', 'ASP.NET Core', 'SQL', 'Bootstrap', 'Tailwind CSS',
              'JavaScript', 'Power BI', 'Git', 'REST APIs', 'Entity Framework'].map((item, i) => (
              <span key={i} className="ticker__item">
                {item} <span className="ticker__dot">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: '1+', label: 'Year Experience' },
              { value: '40%', label: 'Error Reduction (Gate Module)' },
              { value: '100K+', label: 'Daily Records Handled' },
              { value: '30%', label: 'Query Time Saved' },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="section quick-section">
        <div className="container">
          <p className="tag">// explore</p>
          <h2 className="quick-section__title">What I've been building</h2>
          <div className="accent-line"></div>
          <div className="quick-grid">
            <Link to="/projects" className="quick-card">
              <span className="quick-card__icon">⚙️</span>
              <h3>Projects</h3>
              <p>MIS systems, dashboards & React experiments</p>
              <span className="quick-card__arrow">→</span>
            </Link>
            <Link to="/skills" className="quick-card">
              <span className="quick-card__icon">🛠</span>
              <h3>Skills</h3>
              <p>Tech stack from frontend to database</p>
              <span className="quick-card__arrow">→</span>
            </Link>
            <Link to="/about" className="quick-card">
              <span className="quick-card__icon">👩‍💻</span>
              <h3>About</h3>
              <p>My journey, education & certifications</p>
              <span className="quick-card__arrow">→</span>
            </Link>
            <Link to="/contact" className="quick-card">
              <span className="quick-card__icon">✉️</span>
              <h3>Contact</h3>
              <p>Let's connect and collaborate</p>
              <span className="quick-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;