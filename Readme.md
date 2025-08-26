# Ansh Tank - Personal Portfolio

> A modern, responsive portfolio website showcasing my journey as a Full-Stack Developer and DevOps Engineer.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **🌓 Theme Support**: Dark and light mode with seamless transitions
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Built with Next.js 15 and React 19
- **🎯 Interactive Sections**: Hero, About, Skills, Projects, Hackathons, and Contact
- **📧 Contact Form**: Direct inquiry system with form validation
- **🚀 Live Project Demos**: Links to deployed applications and GitHub repositories
- **♿ Accessible**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.2.4 (React 19)
- **Styling**: Tailwind CSS 4.1.9 with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Source Sans 3
- **Theme**: Next-themes for dark/light mode

### Backend & Database

- **Database**: MongoDB 6.18.0
- **API Routes**: Next.js API routes
- **Form Handling**: React Hook Form with Zod validation

### Development Tools

- **Language**: TypeScript 5
- **Build Tool**: Next.js with Turbopack
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm/pnpm

## 📁 Project Structure

```
ansh-portfolio/
├── app/                    # Next.js 13+ App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── hire/          # Hire form endpoint
│   ├── projects/          # Projects page
│   ├── hire/             # Hire me page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── HackathonsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/               # UI primitives (Radix + custom)
│   └── theme-provider.tsx # Theme context provider
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── public/               # Static assets
│   ├── *.png            # Project screenshots
│   └── Ansh-model.png   # Profile image
├── hooks/                # Custom React hooks
├── data/                 # Static data files
└── styles/               # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- MongoDB (for contact form)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AnshTank/ansh-portfolio.git
   cd ansh-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Add your MongoDB connection string and other required variables.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Sections

- **Hero**: Introduction with animated background and call-to-action
- **About**: Personal background and professional journey
- **Skills**: Technical expertise with interactive skill cards
- **Projects**: Featured projects with live demos and source code
- **Hackathons**: Competition achievements and innovative solutions
- **Contact**: Direct communication form with validation

## 🌟 Featured Projects

- **ConsultBridge**: AI-powered consultancy platform
- **HOP-11**: Nurse handoff optimization system (Hackathon Winner)
- **MindMingle**: Mental wellness social platform
- **Vacation Rental App**: Full-stack booking platform
- **Financial Literacy Platform**: Educational fintech solution

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨💻 Author

**Ansh Tank** - Full-Stack Developer & DevOps Engineer

- 🌐 Portfolio: [anshtank.dev](https://anshtank.dev)
- 💼 LinkedIn: [linkedin.com/in/anshtank9](https://www.linkedin.com/in/anshtank9)
- 🐙 GitHub: [github.com/AnshTank](https://github.com/AnshTank)
- 📧 Email: anshtank9@gmail.com

---

⭐ **Star this repository if you found it helpful!**
