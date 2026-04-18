# Priyadharshini R — React Portfolio

A personal developer portfolio built with **React.js**, showcasing projects, skills, and experience.

## 🚀 Tech Stack

- React 18
- React Router v6 (multi-page navigation)
- React Hooks (`useState`, `useEffect`, `useRef`)
- CSS3 (custom properties, animations, transitions)
- Google Fonts

## 📁 Project Structure

```
src/
├── index.js              ← Entry point
├── App.js                ← Router setup
├── styles/
│   └── index.css         ← Global styles & CSS variables
├── components/
│   ├── Navbar.js         ← Responsive navbar with mobile menu
│   ├── Navbar.css
│   ├── Footer.js
│   └── Footer.css
└── pages/
    ├── Home.js           ← Hero, typing animation, stats, quick links
    ├── Home.css
    ├── About.js          ← Bio, timeline, certifications
    ├── About.css
    ├── Projects.js       ← Filterable project cards
    ├── Projects.css
    ├── Skills.js         ← Animated skill bars, tech badges
    ├── Skills.css
    ├── Contact.js        ← Contact form with validation
    └── Contact.css
```

## ⚛️ React Concepts Used

| Concept | Where |
|---|---|
| `useState` | Navbar menu toggle, filter state, form data, submission state |
| `useEffect` | Scroll listener, typing animation loop, intersection observer |
| `useRef` | Targeting DOM elements for IntersectionObserver |
| `React Router` | `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `useLocation` |
| Component composition | Navbar, Footer reused across all pages |
| Props | SkillBar receives `name` and `level` as props |
| Conditional rendering | Success message vs. form, active filter styles |
| List rendering | `.map()` for projects, skills, nav links |
| Custom Hooks | `useTypingEffect` in Home.js |
| Event handling | Form `onChange`, `onSubmit`, button `onClick` |
| Form validation | Contact page — controlled inputs with error state |

## 🛠 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📌 Customization Checklist

Before pushing to GitHub, update these:

- [ ] `src/pages/About.js` — Update bio, social links
- [ ] `src/pages/Projects.js` — Add real GitHub links
- [ ] `src/pages/Contact.js` — Replace email with yours
- [ ] `src/components/Navbar.js` — Replace GitHub/LinkedIn URLs
- [ ] `src/components/Footer.js` — Replace social URLs
- [ ] `public/index.html` — Update meta description/title

## 📬 Contact Form Note

The contact form currently logs to the console. To make it actually send emails, integrate one of:
- **EmailJS** (free, no backend needed) — https://emailjs.com
- **Formspree** — https://formspree.io
- **Netlify Forms** — if hosting on Netlify

## 🌐 Deployment

```bash
# Deploy to GitHub Pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

---

Built with ❤️ by Priyadharshini R
