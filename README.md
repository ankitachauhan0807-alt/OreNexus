# 🛰️ OreNexus — Autonomous Manganese Reserve & Production Intelligence

<div align="center">

  <img src="https://img.shields.io/badge/OreNexus-Manganese%20AI%20Platform-00E5FF?style=for-the-badge&logo=satellite&logoColor=black" alt="OreNexus Banner" />
  
  <br/>
  <br/>

  [![Vite](https://img.shields.io/badge/Vite-8.0.14-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  [![License](https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge)](LICENSE)

  <p align="center">
    <strong>Problem Statement ID: 26009 | Ministry of Steel & MOIL Limited</strong><br/>
    <em>Using AI/ML and Space Technology to Identify Manganese Reserves and Overcome Production Shortfalls</em>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
    <a href="#-architecture--workflow">Architecture</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-deploying-to-vercel">Deploy to Vercel</a> •
    <a href="#-contact">Contact</a>
  </p>

</div>

---

## 📌 Executive Summary

**MOIL Limited** is the largest producer of Manganese Ore in India. Conventional reserve estimation and extraction planning rely heavily on manual surveys, physical core drilling, and historical spreadsheets. These workflows are slow, capital-intensive, and prone to significant estimation variance.

**OreNexus** bridges this operational gap with a high-fidelity geospatial intelligence and autonomous mining platform. By fusing **space-borne multispectral satellite feeds** (Sentinel-2, Landsat-8/9, Sentinel-1 InSAR) with **subsurface geophysical data**, **IoT telemetry**, and **physics-informed neural networks (PINNs)**, OreNexus enables:
1. **Targeted Subsurface Mineral Discovery** with pin-point accuracy.
2. **Dynamic 3D Block Modeling** predicting Mn grade (%) across spatial coordinates.
3. **Closed-Loop Extraction & Haul Scheduling** to prevent mill-feed bottlenecks.
4. **Next-Best-Drill Optimization** cutting exploratory drilling expenditures by over 40%.

---

## ✨ Key Features

| Feature | Technical Highlights | Operational Benefit |
| :--- | :--- | :--- |
| **🛰️ Space Tech Reserve Mapping** | InSAR ground deformation, Land Surface Temperature (LST), NDVI, and SWIR mineral band rationing | Detects blind manganese outcrops and structural fault lines without surface disruption |
| **🧊 AI 3D Block Grade Estimator** | Physics-informed 3D Gaussian Splatting + 3D Kriging regression modeling | Replaces static geological models with dynamic, self-calibrating ore bodies |
| **🎯 Next-Best-Drill Recommendation** | Bayesian Information Gain & Monte Carlo drill placement optimization | Pinpoints the single highest-value exploratory borehole location |
| **⚡ Closed-Loop Fleet & Ore Blending** | Real-time payload weight sensors, telematics, and grade reconciliation | Eliminates shortfall mismatches between planned and actual ROM production |
| **🎛️ What-If Scenario Sandbox** | Multi-factor scenario simulator for weather, drill downtime, and grade fluctuations | Stress-tests monthly mining schedules against real-world contingencies |

---

## 🛠️ Tech Stack & Architecture

### 💻 Client-Side UI & Visual Experience
<p align="left">
  <img src="https://skillicons.dev/icons?i=react,vite,js,html,css,tailwind" alt="Frontend Stack" />
</p>

- **Core Framework:** React 18 (JSX Transform) + Vite 8
- **Styling & Design System:** Tailwind CSS, PostCSS, Custom Manganese Glow & Neon Glassmorphism
- **Motion & Micro-interactions:** GSAP (ScrollTrigger, Flip, Observer), Motion (Framer Motion v12)
- **Icons & Visuals:** React Icons (`react-icons/fi`, `react-icons/ri`, `react-icons/fa6`), Lucide-inspired SVG components
- **Media Engine:** Responsive HTML5 video stream integration, lazy-loaded HD mining drone footage & field photography

### 🧠 Computational & Predictive Engine (Conceptual Core)
<p align="left">
  <img src="https://skillicons.dev/icons?i=python,pytorch,tensorflow,docker,fastapi,git,github" alt="AI & Tools" />
</p>

- **Remote Sensing Ingestion:** Sentinel Hub API, Landsat-8/9 TIR & SWIR bands, ISRO Bhuvan integration
- **Geostatistical Modeling:** Ordinary & Indicator Kriging, 3D Point-Cloud Meshes
- **Optimization:** Python Scipy / OR-Tools for linear blending & shortest-haul dispatch

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or `>=20.x` recommended)
- [npm](https://www.npmjs.com/) (version `9.x` or higher)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MK-codes365/OreNexus.git
   cd OreNexus
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```
   Output bundle is generated cleanly in `./dist`.

---

## ☁️ Deploying to Vercel

OreNexus is optimized for 1-click zero-configuration deployment on **Vercel**:

### Option 1: Deploy via Vercel Web Dashboard (Recommended)
1. Navigate to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **Add New...** ➔ **Project**.
3. Select and import your repository: **`MK-codes365/OreNexus`**.
4. Configure Project settings (preset is auto-detected):
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live on a global CDN in under a minute!

### Option 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

---

## 📂 Project Structure

```text
OreNexus/
├── public/
│   ├── audio/              # Ambient UI soundscapes
│   ├── img/                # High-res geological & mining graphics
│   └── videos/             # Operational mine site footage & satellite animations
├── src/
│   ├── components/
│   │   ├── OreNexusLogo.jsx           # Animated crystal & satellite orbital radar emblem
│   │   ├── ProblemStatementModal.jsx  # MoS / MOIL PS 26009 specification modal
│   │   ├── Hero.jsx                   # Interactive hero with cinematic video switcher
│   │   ├── MeetOreNexus.jsx           # Overview & core value propositions
│   │   ├── ReserveIntelligence.jsx    # Space tech remote sensing & SWIR band analysis
│   │   ├── ProductionIntelligence.jsx # Closed-loop haul, fleet, and ROM blending
│   │   ├── NextBestDrill.jsx          # AI borehole recommendation engine
│   │   ├── WhatIfEngine.jsx           # Interactive operational simulator
│   │   ├── ClosedLoopAI.jsx           # Real-time feedback loop visualizer
│   │   ├── TheShortfall.jsx           # Problem context & production gap breakdown
│   │   ├── FinalCTA.jsx               # Call to action & field deployment prompt
│   │   └── Navbar.jsx & Footer.jsx    # Modern glassmorphism navigation & footer
│   ├── App.jsx                        # Application root
│   ├── main.jsx                       # Entrypoint
│   └── index.css                      # Tailwind utilities & custom animation tokens
├── package.json                       # Scripts and project dependencies
├── vite.config.js                     # Vite build configuration
└── README.md                          # Project documentation
```

---

## 📬 Contact & Maintainer

<div align="center">

  **Mukut Kumar**  
  📧 Email: [mukutkumar842@gmail.com](mailto:mukutkumar842@gmail.com)  
  🐙 GitHub: [@MK-codes365](https://github.com/MK-codes365)  
  🌐 Project Repository: [https://github.com/MK-codes365/OreNexus](https://github.com/MK-codes365/OreNexus)

  <br/>

  <sub>Developed for the Ministry of Steel & MOIL Limited — Problem Statement 26009</sub>

</div>
