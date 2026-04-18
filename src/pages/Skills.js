import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5 & CSS3', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'JavaScript (ES6+)', level: 72 },
      { name: 'React.js', level: 45 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'VB.NET', level: 80 },
      { name: 'ASP.NET Core MVC', level: 75 },
      { name: 'Entity Framework Core', level: 70 },
      { name: 'REST API Integration', level: 72 },
      { name: 'Node.js (learning)', level: 30 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'Oracle', level: 60 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 72 },
      { name: 'Power BI', level: 75 },
      { name: 'Postman', level: 68 },
      { name: 'Visual Studio', level: 80 },
      { name: 'Python (basics)', level: 40 },
    ],
  },
];

const techBadges = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind',
  'VB.NET', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'MySQL',
  'Oracle', 'Git', 'Power BI', 'Postman', 'REST APIs', 'Python',
];

// Animated skill bar component
function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-page section">
      <div className="container">
        <p className="tag">// tech stack</p>
        <h1 className="skills__title">Skills & Tools</h1>
        <div className="accent-line"></div>

        {/* Tech badges */}
        <div className="tech-badges">
          {techBadges.map((badge) => (
            <span key={badge} className="tech-badge">{badge}</span>
          ))}
        </div>

        {/* Skill bars grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category card">
              <div className="skill-category__header">
                <span className="skill-category__icon">{category.icon}</span>
                <h2 className="skill-category__title">{category.title}</h2>
              </div>
              <div className="skill-category__list">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages spoken */}
        <div className="languages-section">
          <p className="tag">// languages</p>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', marginBottom: '1rem' }}>
            Programming Languages
          </h2>
          <div className="lang-chips">
            {[
              { name: 'VB.NET', color: '#7B68EE' },
              { name: 'SQL', color: '#FF8C00' },
              { name: 'JavaScript', color: '#F7DF1E' },
              { name: 'Python', color: '#3776AB' },
              { name: 'C# (basics)', color: '#239120' },
            ].map((lang) => (
              <div key={lang.name} className="lang-chip">
                <span
                  className="lang-chip__dot"
                  style={{ background: lang.color }}
                ></span>
                {lang.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
