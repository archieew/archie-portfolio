# Archie Custodio - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a sleek glassmorphism design with dark/light theme support.

![Portfolio Preview](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

## 🌐 Live Demo

**[View Portfolio →](https://archieew.github.io/archie-portfolio/)**

## ✨ Features

- **🎨 Modern UI/UX** - Glassmorphism design with smooth animations
- **🌓 Dark/Light Theme** - Toggle between themes with preference saved locally
- **⌨️ Typing Animations** - Dynamic text effects on tagline and buttons
- **🎬 Loading Screen** - Animated intro with progress indicator
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile
- **🎯 Interactive Elements** - Hover effects, smooth transitions, and micro-interactions
- **🖼️ Project Gallery** - Showcase projects with image galleries and descriptions
- **📄 Resume Download** - One-click PDF resume download
- **🔗 Social Links** - Connect via GitHub, LinkedIn, and more

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript |
| **Build Tool** | Vite |
| **Styling** | CSS Modules, CSS Variables |
| **Icons** | React Icons |
| **Deployment** | GitHub Pages |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/archieew/archie-portfolio.git
   cd archie-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/archie-portfolio
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/              # Images, logos, resume PDF
│   ├── logos/           # Company logos
│   └── projects/        # Project screenshots
├── components/          # React components
│   ├── styles/          # Component CSS files
│   ├── About.tsx        # About section with skills
│   ├── Contact.tsx      # Certificates gallery
│   ├── Projects.tsx     # Projects showcase
│   ├── Resume.tsx       # Education & experience
│   ├── Sidebar.tsx      # Profile sidebar
│   ├── TopNav.tsx       # Navigation tabs
│   ├── ThemeToggle.tsx  # Dark/light mode switch
│   ├── TypingText.tsx   # Typing animation
│   ├── LoadingScreen.tsx # Intro loading animation
│   └── FloatingParticles.tsx # Background effects
├── App.tsx              # Main app component
├── App.module.css       # App layout styles
└── index.css            # Global styles & theme variables
```

## 🎨 Customization

### Changing Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #10B981;      /* Green accent */
  --secondary-color: #38bdf8;    /* Blue accent */
  --tertiary-color: #8b5cf6;     /* Purple accent */
}
```

### Adding New Projects

Edit the `projects` array in `src/components/Projects.tsx`:

```tsx
{
  title: "Project Name",
  mainImage: projectImage,
  description: "Project description...",
  tech: [<SiReact />, <SiTypescript />],
  liveDemo: "https://...",
  github: "https://github.com/...",
  galleryImages: [img1, img2, img3],
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Device |
|------------|--------|
| `< 480px`  | Mobile (small) |
| `< 768px`  | Mobile / Tablet |
| `< 1024px` | Tablet / Small laptop |
| `> 1024px` | Desktop |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Archie D. Custodio**

- GitHub: [@archieew](https://github.com/archieew)
- LinkedIn: [Archie Custodio](https://www.linkedin.com/in/archie-custodio-0b29b2144/)
- Email: archieew2custodio@gmail.com

---

⭐ If you like this portfolio, give it a star on GitHub!
