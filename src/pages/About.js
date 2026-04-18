import React from 'react';
import './About.css';

const timeline = [
  {
    year: '2020',
    title: 'Started B.Tech - Information Technology',
    place: 'Aalim Muhammed Salegh College of Engineering',
    desc: 'Began my journey in software development. CGPA: 8.3 / 10.0',
  },
  {
    year: '2024',
    title: 'Graduated B.Tech',
    place: 'Aalim Muhammed Salegh College of Engineering',
    desc: 'Completed B.Tech with strong foundation in data structures, algorithms, databases, and web development.',
  },
  {
    year: '2025',
    title: '.NET Developer — Accsys Electronics',
    place: 'Chennai, India',
    desc: 'Built and maintained enterprise MIS web applications for cement packing operations. Delivered Gate Reader automation, production dashboards, and SQL optimizations.',
  },
];

const certifications = [
  {
    name: 'Complete Web Development Bootcamp',
    issuer: 'Udemy',
    status: 'ongoing',
    desc: 'HTML5, CSS3, JavaScript, React, Node.js, REST APIs',
  },
  {
    name: 'Professional Data Analyst',
    issuer: 'Google',
    status: 'completed',
    desc: 'Data analysis, visualization, and reporting techniques',
  },
  {
    name: 'Python Full Stack Developer',
    issuer: 'Qspiders',
    status: 'completed',
    desc: 'Python backend development fundamentals',
  },
];

function About() {
  return (
    <div className="about-page section">
      <div className="container">

        {/* Header */}
        <p className="tag">// about me</p>
        <h1 className="about__title">The Story So Far</h1>
        <div className="accent-line"></div>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm a Full-Stack developer based in Chennai, India, with 1+ year of experience
              building enterprise MIS applications at Accsys Electronics. I work with <strong>VB.NET,
              ASP.NET Core, SQL, and Bootstrap</strong> to build tools that real people use every day.
            </p>
            <p>
              Right now, I'm making a deliberate shift toward <strong>React-based frontend development</strong>.
              I believe great UI isn't just about looks — it's about how clearly data is communicated
              and how smooth the experience feels for the user.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new frameworks, solving data puzzles,
              and building things that solve real problems.
            </p>

            <div className="about__info-grid">
              {[
                { label: 'Location', value: 'Chennai, India' },
                { label: 'Email', value: 'rpriyadharshini0903@gmail.com' },
                { label: 'Role', value: '.NET Developer → React Dev' },
                { label: 'Education', value: 'B.Tech IT — CGPA 8.3' },
              ].map((item) => (
                <div key={item.label} className="about__info-item">
                  <span className="about__info-label">{item.label}</span>
                  <span className="about__info-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a
                href="https://www.linkedin.com/in/priyadharshini0903-r/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Priyadharshini0903"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="about__timeline">
            <h2 className="about__section-title">Journey</h2>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__year">{item.year}</div>
                  <div className="timeline__content">
                    <h3 className="timeline__role">{item.title}</h3>
                    <p className="timeline__place">{item.place}</p>
                    <p className="timeline__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-section">
          <p className="tag">// learning</p>
          <h2 className="about__section-title">Certifications</h2>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card card">
                <div className="cert-card__header">
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <span className={`cert-card__badge ${cert.status === 'ongoing' ? 'badge--ongoing' : 'badge--done'}`}>
                    {cert.status}
                  </span>
                </div>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <p className="cert-card__desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
