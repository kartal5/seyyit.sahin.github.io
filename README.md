# Seyyit Sahin | Web Developer & Software Engineer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-www.seyyitsahin.com-success?style=for-the-badge)](https://www.seyyitsahin.com)
[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Welcome to the source code of my personal portfolio! This repository showcases my approach to building modern, highly optimized, and scalable web applications.

## 🚀 The Architecture (Vanilla JS ➡️ Next.js)

This project recently underwent a complete ground-up migration. It started as a traditional Vanilla HTML/CSS/JS website and was re-architected into an enterprise-grade **Next.js (App Router)** application. 

My primary goals for this migration were **maximum performance**, **scalability**, and **developer experience (DX)**. Rather than relying on heavy third-party libraries, I utilized Next.js native features to build a lightweight, statically generated (SSG) site.

## ✨ Key Technical Highlights

* **Static Site Generation (SSG):** The entire application is pre-rendered at build time using `output: 'export'`. It serves pure and fast static HTML/CSS to the client with zero server-side rendering overhead.
* **Zero-Dependency i18n:** Instead of bringing in heavy internationalization libraries, I implemented explicit, typed URL routing (`/` for Danish, `/en/` for English). This ensures perfect SEO crawler indexing and immediate load times.
* **Decoupled Data Layer:** The UI components (`src/components/`) are completely decoupled from the data layer (`src/content/`). Adding a new project or updating my resume is done entirely via typed TypeScript objects, preventing UI regressions.
* **Native CSS Variables & Theming:** To maintain complete control over the design system without the bloat of external CSS frameworks, I kept styling native. It features a custom light/dark mode implementation.
* **Automated CI/CD Pipeline:** Deployments are handled automatically via GitHub Actions. Merging to the `master` branch triggers a secure build and deploy process directly to GitHub Pages with zero downtime.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Vanilla CSS & CSS Variables
* **Hosting:** GitHub Pages
* **CI/CD:** GitHub Actions

## 📂 Project Structure

```text
src/
├── app/              # Next.js App Router (Pages, Layouts, SEO Metadata)
├── components/       # Reusable, locale-agnostic React components
├── content/          # TypeScript dictionaries for CV data and Project details
├── lib/              # Utility functions and optimized local font loading
└── globals.css       # Core design system and responsive media queries
````

## 🏃‍♂️ Running Locally

If you'd like to explore the code or run the project locally:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/kartal5/seyyit.sahin.github.io.git](https://github.com/kartal5/seyyit.sahin.github.io.git)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

-----

### 📫 Let's Connect

I am currently open to new opportunities\! Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/seyyit-sahin/) or contact me directly through my [website](https://www.google.com/url?sa=E&source=gmail&q=https://www.seyyitsahin.com).