// src/content/cv-data.ts
export type Locale = "da" | "en";

export type HomeProject = {
  slug: string;
  title: string;
  linkLabel: string;
  href: string;
  external: boolean;
};

export type WorkItem = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
};

export type CvContent = {
  meta: { title: string };
  hero: { name: string; bio: string; email: string };
  sections: {
    skills: string;
    projects: string;
    techstack: string;
    work: string;
    education: string;
    contact: string;
  };
  socials: {
    resumeLabel: string;
    resumeHref: string;
    linkedinLabel: string;
    linkedinHref: string;
    githubLabel: string;
    githubHref: string;
  };
  skills: string[];
  homeProjects: HomeProject[];
  techStack: string[];
  workHistory: WorkItem[];
  education: string[];
  contact: {
    description: string;
    emailLabel: string;
    email: string;
  };
};

export const cvContent: Record<Locale, CvContent> = {
  da: {
    "meta": { "title": "Seyyit Sahin - CV" },
    "hero": {
      "name": "Seyyit Sahin",
      "bio": "Datamatiker og Professionsbachelor i Webudvikling. Jeg bygger moderne web løsninger med fokus på performance, brugervenlighed og effektiv codebase-struktur.",
      "email": "seyyit.sahin@outlook.com"
    },
    "sections": {
      "skills": "Kvalifikationer",
      "projects": "Projekter",
      "techstack": "Tech Stack",
      "work": "Erhvervserfaring",
      "education": "Uddannelse",
      "contact": "Lad os arbejde sammen"
    },
    "socials": {
      "resumeLabel": "Download CV",
      "resumeHref": "/resume.pdf",
      "linkedinLabel": "LinkedIn",
      "linkedinHref": "https://www.linkedin.com/in/seyyit-sahin/",
      "githubLabel": "GitHub",
      "githubHref": "https://github.com/kartal5"
    },
    "skills": [
      "Bygger fullstack web apps i moderne frameworks",
      "Fokus på god UX, performance og responsivitet",
      "Skalerbar struktur med fokus på vedligeholdelse",
      "Erfaring med automatiseret test og kvalitetssikring",
      "Kan arbejde selvstændigt og levere i samarbejde"
    ],
    "homeProjects": [
      {
        "slug": "prostore",
        "title": "Moderne Webshop i Next.js",
        "linkLabel": "→ Se detaljer",
        "href": "/projects/prostore/",
        "external": false
      },
      {
        "slug": "cella-test",
        "title": "Datahåndterings Web App – bygget under praktik hos Cella Test",
        "linkLabel": "→ Se detaljer",
        "href": "/projects/cella-test/",
        "external": false
      },
      {
        "slug": "mobilecare",
        "title": "Udviklet responsiv og intuitiv frontend-løsning til Mobilecare.dk",
        "linkLabel": "→ Besøg siden",
        "href": "https://mobilecare.dk/",
        "external": true
      }
    ],
    "techStack": [
      "C#, ASP.NET, JavaScript, HTML, CSS",
      "React, Node.js, Next.js",
      "SQL, MongoDB",
      "Git, Azure DevOps"
    ],
    "workHistory": [
      {
        "title": "🚧 FULLSTACK UDVIKLER | CELLA TEST (Praktik)",
        "period": "2024",
        "description": "Udviklede komplette løsninger med fokus på integration af moderne frontend og backend-teknologier. Arbejdede med både performance og vedligeholdelse af eksisterende løsninger.",
        "highlights": []
      },
      {
        "title": "🚧 IT Konsulent | Antvorskov Skole (Praktik)",
        "period": "2022 – 2023",
        "description": "Leverede IT-support og optimerede systemer i et miljø med mange brugere og varierende behov.",
        "highlights": [
          "Udviklede og implementerede systemforbedringer i tæt dialog med brugere",
          "Skabte stabil drift og bedre arbejdsgange gennem teknisk support"
        ]
      },
      {
        "title": "🚧 Frontend Udvikler | MobileCare.dk (Praktik)",
        "period": "2020",
        "description": "Udviklede en responsiv frontend-løsning med fokus på brugervenlighed og kvalitet.",
        "highlights": [
          "Arbejdede tæt med UX-design og performance"
        ]
      }
    ],
    "education": [
      "🎓 Professionsbachelor i Webudvikling | UCL Erhvervsakademi (2023 – 2025)",
      "🎓 Professionsbachelor i Softwareudvikling | UCL Erhvervsakademi (2018)",
      "🎓 Datamatiker | Zealand Erhvervsakademi (2016 – 2018)"
    ],
    "contact": {
      "description": "Hvis du har et projekt eller en rolle, der matcher min profil, så lad os tage en snak.",
      "emailLabel": "Email mig",
      "email": "seyyit.sahin@outlook.com"
    }
  },

  en: {
    "meta": { "title": "Seyyit Sahin - CV" },
    "hero": {
      "name": "Seyyit Sahin",
      "bio": "Computer Science AP graduate and Web Development bachelor. I build modern web solutions with a focus on performance, usability, and maintainable structure.",
      "email": "seyyit.sahin@outlook.com"
    },
    "sections": {
      "skills": "Qualifications",
      "projects": "Projects",
      "techstack": "Tech Stack",
      "work": "Work Experience",
      "education": "Education",
      "contact": "Let's work together"
    },
    "socials": {
      "resumeLabel": "Download CV",
      "resumeHref": "/resume.pdf",
      "linkedinLabel": "LinkedIn",
      "linkedinHref": "https://www.linkedin.com/in/seyyit-sahin/",
      "githubLabel": "GitHub",
      "githubHref": "https://github.com/kartal5"
    },
    "skills": [
      "Build fullstack web apps in modern frameworks",
      "Focus on UX, performance, and responsive layouts",
      "Scalable structure with maintainability in mind",
      "Experience with automated testing and QA",
      "Work independently and deliver in collaboration"
    ],
    "homeProjects": [
      {
        "slug": "prostore",
        "title": "Modern Webshop in Next.js",
        "linkLabel": "→ View details",
        "href": "/en/projects/prostore/",
        "external": false
      },
      {
        "slug": "cella-test",
        "title": "Data management web app – built during internship at Cella Test",
        "linkLabel": "→ View details",
        "href": "/en/projects/cella-test/",
        "external": false
      },
      {
        "slug": "mobilecare",
        "title": "Built a responsive and intuitive frontend solution for Mobilecare.dk",
        "linkLabel": "→ Visit website",
        "href": "https://mobilecare.dk/",
        "external": true
      }
    ],
    "techStack": [
      "C#, ASP.NET, JavaScript, HTML, CSS",
      "React, Node.js, Next.js",
      "SQL, MongoDB",
      "Git, Azure DevOps"
    ],
    "workHistory": [
      {
        "title": "🚧 FULLSTACK DEVELOPER | CELLA TEST (Internship)",
        "period": "2024",
        "description": "Built end-to-end solutions with modern frontend and backend integration. Worked on performance and maintenance of existing systems.",
        "highlights": []
      },
      {
        "title": "🚧 IT Consultant | Antvorskov School (Internship)",
        "period": "2022 – 2023",
        "description": "Provided IT support and improved systems in a high-usage environment with varied user needs.",
        "highlights": [
          "Developed and implemented system improvements in close dialog with users",
          "Improved stability and workflows through reliable technical support"
        ]
      },
      {
        "title": "🚧 Frontend Developer | MobileCare.dk (Internship)",
        "period": "2020",
        "description": "Built a responsive frontend solution with focus on usability and quality.",
        "highlights": [
          "Worked closely with UX design and performance"
        ]
      }
    ],
    "education": [
      "🎓 Professional Bachelor in Web Development | UCL University College (2023 – 2025)",
      "🎓 Bachelor in Software Development | UCL University College (2018)",
      "🎓 Computer Science AP | Zealand Academy (2016 – 2018)"
    ],
    "contact": {
      "description": "If you have a project or role that matches my profile, let’s talk.",
      "emailLabel": "Email me",
      "email": "seyyit.sahin@outlook.com"
    }
  }
};
