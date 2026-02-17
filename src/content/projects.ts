import type { Locale } from "./cv-data";

export type ProjectSlug = "prostore" | "cella-test";

export type ProjectLinks = {
  liveDemoLabel: string;
  liveDemoHref: string;
  sourceCodeLabel: string;
  sourceCodeHref: string;
};

export type ProjectContent = {
  slug: ProjectSlug;
  title: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  techStack: string[];
  links: ProjectLinks;
  backLabel: string;
};

export const projectSlugs: ProjectSlug[] = ["prostore", "cella-test"];

export const projectsByLocale: Record<Locale, Record<ProjectSlug, ProjectContent>> = {
  da: {
    "prostore": {
      "slug": "prostore",
      "title": "Projekt: Prostore E-commerce Web App",
      "heading": "Prostore E-commerce Web App",
      "paragraphs": [
        "Prostore er en moderne, fuldt udstyret e-commerce webapplikation bygget med <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Prisma</strong>, <strong>ShadCN</strong> og en <strong>PostgreSQL</strong> database. Applikationen understøtter Avanceret produktstyring med kategorier, filtrering, PayPal og Stripe som betalingflow, samt bruger-anmeldelser og real-time lagerstatus.",
        "Der blev lagt stor vægt på brugeroplevelsen med dynamisk routing, server-side rendering (SSR) og statisk generering (SSG), som sikrer hurtig indlæsning og SEO-resultater.",
        "Projektet er hostet med Vercel, hvilket sikrer effektiv og sikker deployment, automatisk skalering og kontinuerlig integration/udrulning (CI/CD)."
      ],
      "bullets": [
        "✅ Avanceret produktstyring med kategorier, filtrering og søgning",
        "✅ Produktanmeldelser med rating og filtrering",
        "✅ SEO-optimeret",
        "✅ Autentificering & autorisering med NextAuth.js",
        "✅ CI/CD opsætning & deployment på Vercel"
      ],
      "techStack": ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel"],
      "links": {
        "liveDemoLabel": "Live Demo",
        "liveDemoHref": "https://prostore-dusky-gamma.vercel.app/",
        "sourceCodeLabel": "Kildekode (GitHub)",
        "sourceCodeHref": "https://github.com/kartal5/prostore"
      },
      "backLabel": "← Tilbage"
    },
    "cella-test": {
      "slug": "cella-test",
      "title": "Projekt: Cella Test Webshop",
      "heading": "E-commerce Web App til Cella Test",
      "paragraphs": [
        "Under mit praktikophold hos Cella Test udviklede jeg en fuld funktionel e-commerce applikation målrettet både B2B og B2C brugere. Projektet omfattede alt fra databasearkitektur og brugerautorisering til produktfiltrering og betalingsflow.",
        "Jeg arbejdede i <strong>Vue 3</strong> og <strong>Firebase</strong> som backend med fokus på funktionalitet, skalerbarhed og brugervenlighed. Applikationen blev bygget med både administrator og kundeoplevelsen i centrum, der inkluderede autentificering, dynamisk routing, og et responsivt design som sikrede optimal brugervenlighed på tværs af alle enheder. Desuden integrerede jeg automatiserede testprocesser med Cypress for at sikre høj stabilitet og kvalitet i produktet.",
        "Projektet blev afsluttet med fuld deployment via Firebase Hosting og omfattede SEO-optimerede sider samt fallback 404-pages og lazy loading."
      ],
      "bullets": [
        "✅ Design og udvikling af hele frontend og backend logik",
        "✅ Admin-panel til produkt- og ordre-håndtering",
        "✅ Vue Router, Pinia store, Firebase Auth og Firestore integration",
        "✅ Brugerroller (admin/kunde) med dynamisk visning",
        "✅ Responsivt layout, Tailwind CSS og komponentbaseret arkitektur",
        "✅ Implementeret unit- og E2E tests med Vitest og Cypress"
      ],
      "techStack": ["Vue 3", "Firebase", "Pinia", "Vue Router", "Vitest", "Cypress", "Tailwind CSS"],
      "links": {
        "liveDemoLabel": "Live Demo",
        "liveDemoHref": "https://cella-test-bachelor-webshop.web.app",
        "sourceCodeLabel": "Kildekode (GitHub)",
        "sourceCodeHref": "https://github.com/kartal5/cella-test-webshop"
      },
      "backLabel": "← Tilbage"
    }
  },

  en: {
    "prostore": {
      "slug": "prostore",
      "title": "Project: Prostore E-commerce Web App",
      "heading": "Prostore E-commerce Web App",
      "paragraphs": [
        "Prostore is a modern, fully-featured e-commerce web application built using <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Prisma</strong>, <strong>ShadCN</strong>, and a <strong>PostgreSQL</strong> database. It supports advanced product management with categories, filtering, PayPal and Stripe integration, user reviews, and real-time inventory.",
        "The project emphasized user experience through dynamic routing, server-side rendering (SSR), and static site generation (SSG), resulting in fast loading and strong SEO performance.",
        "The project is hosted on Vercel, ensuring secure, scalable deployment with continuous integration and delivery (CI/CD)."
      ],
      "bullets": [
        "✅ Advanced product management with categories, filters, and search",
        "✅ Product reviews with ratings and filtering",
        "✅ SEO-optimized",
        "✅ Authentication & authorization with NextAuth.js",
        "✅ CI/CD setup & deployment with Vercel"
      ],
      "techStack": ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel"],
      "links": {
        "liveDemoLabel": "Live Demo",
        "liveDemoHref": "https://prostore-dusky-gamma.vercel.app/",
        "sourceCodeLabel": "Source Code",
        "sourceCodeHref": "https://github.com/kartal5/prostore"
      },
      "backLabel": "← Back"
    },
    "cella-test": {
      "slug": "cella-test",
      "title": "Project: Cella Test Webshop",
      "heading": "E-commerce Web App for Cella Test",
      "paragraphs": [
        "During my internship at Cella Test, I developed a fully functional e-commerce application targeted at both B2B and B2C users. The project covered everything from database architecture and user authentication to product filtering and payment flows.",
        "I worked in <strong>Vue 3</strong> and <strong>Firebase</strong> as the backend, with a focus on functionality, scalability, and user-friendliness. The app was built with both the admin and customer experience in mind, featuring authentication, dynamic routing, and a responsive design that ensures usability across all devices. I also integrated automated testing processes using Cypress to ensure high product quality and stability.",
        "The project was fully deployed via Firebase Hosting and included SEO-optimized pages, fallback 404 pages, and lazy loading."
      ],
      "bullets": [
        "✅ Full frontend and backend architecture design",
        "✅ Admin panel for managing products and orders",
        "✅ Vue Router, Pinia store, Firebase Auth and Firestore integration",
        "✅ User roles (admin/customer) with dynamic UI",
        "✅ Responsive layout, Tailwind CSS, component-based architecture",
        "✅ Unit and E2E tests with Vitest and Cypress"
      ],
      "techStack": ["Vue 3", "Firebase", "Pinia", "Vue Router", "Vitest", "Cypress", "Tailwind CSS"],
      "links": {
        "liveDemoLabel": "Live Demo",
        "liveDemoHref": "https://cella-test-bachelor-webshop.web.app",
        "sourceCodeLabel": "Source Code",
        "sourceCodeHref": "https://github.com/kartal5/cella-test-webshop"
      },
      "backLabel": "← Back"
    }
  }
};

export function getProject(locale: Locale, slug: ProjectSlug): ProjectContent {
  return projectsByLocale[locale][slug];
}