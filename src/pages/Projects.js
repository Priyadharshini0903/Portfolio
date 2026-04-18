import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'CEMPACKSYS',
    subtitle: 'Full-Stack MIS Web Application',
    category: 'fullstack',
    tags: ['ASP.NET Core MVC', 'Entity Framework', 'MySQL', 'Bootstrap', 'Razor Views'],
    desc: 'A full-stack MIS web application to modernize legacy desktop systems for cement packing operations. Built with Controller–Service–Repository architecture.',
    highlights: [
      'Dependency Injection & Entity Framework Core',
      'Real-time production dashboards with KPI monitoring',
      'Dynamic data visualizations & automated validation',
      'Optimized SQL queries for high-volume datasets',
    ],
    github: 'https://github.com/Priyadharshini0903/CEMPACKSYS',
    demo: null,
  },
  // {
  //   id: 2,
  //   title: 'Gate Reader Automation',
  //   subtitle: 'Enterprise Automation Module',
  //   category: 'backend',
  //   tags: ['VB.NET', 'SQL Server', 'JavaScript', 'Bootstrap'],
  //   desc: 'Designed and delivered a Gate Reader automation module at Accsys Electronics, significantly reducing manual errors in high-volume operations.',
  //   highlights: [
  //     '40% reduction in manual errors',
  //     '25% improvement in processing efficiency',
  //     'Handles 5,000+ metric tons of daily operations',
  //     'Real-time data validation logic',
  //   ],
  //   github: null,
  //   demo: null,
  // },
  {
    id: 3,
    title: 'React Portfolio',
    subtitle: 'Personal Frontend Project',
    category: 'frontend',
    tags: ['React.js', 'JavaScript ES6+', 'CSS3', 'REST APIs', 'React Hooks'],
    desc: 'This portfolio site — built as a learning project using React. Features component-based architecture, React Hooks, and REST API integrations.',
    highlights: [
      'useState & useEffect hooks',
      'React Router for multi-page navigation',
      'REST API integration for dynamic data',
      'Fully responsive with CSS3',
    ],
    github: 'https://github.com/yourusername/react-portfolio',
    demo: null,
  },
  {
    id: 4,
    title: 'E-Commerce Sales Dashboard',
    subtitle: 'Business Intelligence Dashboard',
    category: 'data',
    tags: ['Power BI', 'Excel', 'Power Query', 'DAX'],
    desc: 'An interactive Power BI sales dashboard analyzing revenue, profit, and regional performance to support business decision-making.',
    highlights: [
      'Dynamic slicers and drill-down filters',
      'Revenue, profit & regional analysis',
      'Data transformations from raw Excel datasets',
      'Automated KPI tracking',
    ],
    github: 'https://github.com/Priyadharshini0903/E-commerece-Dashboard',
    demo: null,
  },
];

const filters = ['all', 'fullstack', 'backend', 'frontend', 'data'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page section">
      <div className="container">
        <p className="tag">// portfolio</p>
        <h1 className="projects__title">Things I've Built</h1>
        <div className="accent-line"></div>

        {/* Filters */}
        <div className="projects__filters">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__header">
                <span className="project-card__category">{project.category}</span>
                <div className="project-card__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link" title="GitHub">
                      {/* GitHub icon */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link" title="Live Demo">
                      ↗
                    </a>
                  )}
                </div>
              </div>

              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__desc">{project.desc}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
