import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    // In a real app, you would send this to a backend or email service
    // For now, we'll just show success
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  const contactLinks = [
    {
      label: 'Email',
      value: 'rpriyadharshini0903@gmail.com',
      href: 'mailto:rpriyadharshini0903@gmail.com',
      icon: '✉',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/priyadharshini0903-r',
      href: 'https://www.linkedin.com/in/priyadharshini0903-r/',
      icon: 'in',
    },
    {
      label: 'GitHub',
      value: 'github.com/Priyadharshini0903',
      href: 'https://github.com/Priyadharshini0903',
      icon: '◈',
    },
    {
      label: 'Location',
      value: 'Chennai, India',
      href: null,
      icon: '⊙',
    },
  ];

  return (
    <div className="contact-page section">
      <div className="container">
        <p className="tag">// get in touch</p>
        <h1 className="contact__title">Let's Connect</h1>
        <div className="accent-line"></div>

        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info">
            <p className="contact__desc">
              I'm currently open to new opportunities — especially frontend or full-stack roles.
              If you have a project, a question, or just want to say hi, feel free to reach out.
            </p>

            <div className="contact__links">
              {contactLinks.map((link) => (
                <div key={link.label} className="contact__link-item">
                  <div className="contact__link-icon">{link.icon}</div>
                  <div>
                    <p className="contact__link-label">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="contact__link-value contact__link-value--clickable"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="contact__link-value">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrapper card">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h2>Message sent!</h2>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={handleReset} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Subject <span className="form-optional">(optional)</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    placeholder="Your message..."
                    rows={5}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
