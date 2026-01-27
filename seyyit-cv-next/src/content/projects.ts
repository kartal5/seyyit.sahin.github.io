// src/content/projects.ts
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
      "heading": "Hvad er Prostore?",
      "paragraphs": [
        "Prostore er en moderne e-commerce webapp bygget i Next.js med fokus på performance og brugeroplevelse.",
        "Projektet inkluderer autentificering, databaseintegration og en komplet checkout flow.",
        "Det er udviklet med clean struktur og produktionstankegang."
      ],
      "bullets": [
        "Auth med NextAuth",
        "Database med Prisma + PostgreSQL",
        "Produktkatalog og filtrering",
        "Cart + checkout flow",
        "Deploy på Vercel"
      ],
      "techStack": ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel"],
      "links": {
        "liveDemoLabel": "Live Demo",
        "liveDemoHref": "https://prostore-dusky-gamma.vercel.app/",
        "sourceCodeLabel": "Source Code",
        "sourceCodeHref": "https://github.com/kartal5/prostore"
      },
      "backLabel": "← Tilbage"
    },
    "cella-test": {
      "slug": "cella-test",
      "title": "Projekt: Cella Test Webshop",
      "heading": "Hvad er Cella Test Webshop?",
      "paragraphs": [
        "En e-commerce webapp udviklet til Cella Test i forbindelse med praktik.",
        "Fokus på struktur, brugeroplevelse og moderne frontend patterns.",
        "Test og kvalitetssikring var en del af leverancen."
      ],
      "bullets": [
        "Vue 3 + Pinia state management",
        "Firebase integration",
        "Routing med Vue Router",
        "Test med Vitest",
        "E2E test med Cypress",
        "Styling med Tailwind CSS"
      ],
      "techStack": ["Vue 3", "Firebase", "Pinia", "Vue Router", "Vitest", "Cypress", "Tailwind CSS"],
      "links": {
        "liveDemoLabel": "Live Demo",
        "liveDemoHref": "https://cella-test-bachelor-webshop.web.app",
        "sourceCodeLabel": "Source Code",
        "sourceCodeHref": "https://github.com/kartal5/cella-test-webshop"
      },
      "backLabel": "← Tilbage"
    }
  },

  en: {
    "prostore": {
      "slug": "prostore",
      "title": "Project: Prostore E-commerce Web App",
      "heading": "What is Prostore?",
      "paragraphs": [
        "Prostore is a modern e-commerce web app built in Next.js with a focus on performance and UX.",
        "The project includes authentication, database integration, and a full checkout flow.",
        "Built with a clean structure and a production mindset."
      ],
      "bullets": [
        "Auth with NextAuth",
        "Database with Prisma + PostgreSQL",
        "Product catalog and filtering",
        "Cart + checkout flow",
        "Deployed on Vercel"
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
      "heading": "What is Cella Test Webshop?",
      "paragraphs": [
        "An e-commerce web app built for Cella Test during an internship.",
        "Focus on structure, UX, and modern frontend patterns.",
        "Testing and QA were part of the delivery."
      ],
      "bullets": [
        "Vue 3 + Pinia state management",
        "Firebase integration",
        "Routing with Vue Router",
        "Testing with Vitest",
        "E2E testing with Cypress",
        "Styling with Tailwind CSS"
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
