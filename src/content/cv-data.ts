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
  hero: { name: string; bioHtml: string; email: string };
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
  hero: {
    name: "Seyyit Sahin",
    bioHtml:
      "Datamatiker, Softwareudvikler & Tech Entusiast med baggrund i web- og softwareudvikling fra <a href='https://www.ucl.dk' target='_blank'>UCL Erhvervsakademi og Professionshøjskole</a>.",
    email: "👉 seyyit.sahin@outlook.com",
  },
    "sections": {
      "skills": "Kompetencer og Kvalifikationer",
      "projects": "Projekter & Resultater",
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
      "✔️ Hurtig og løsningsorienteret tilgang",
      "✔️ Erfaring med softwareudviklings livscyklus fra idé til implementering",
      "✔️ Visuelt orienteret inden for UI/UX med design der skiller sig ud",
      "✔️ Evnen til at omsætte komplekse krav til intuitive løsninger",
      "✔️ Stærk kommunikator og teamspiller"
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
        "description": "Udviklede komplette løsninger med fokus på integration af moderne frontend og backend-teknologier.",
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
        "description": "Udviklede en responsiv frontend-løsning med fokus på brugervenlighed.",
        "highlights": [
          "Arbejdede tæt med UX-design og performance"
        ]
      }
    ],
    "education": [
      "🎓 Professionsbachelor i Webudvikling | UCL Erhvervsakademi (2023 – 2025)",
      "🎓 Professionsbachelor i Softwareudvikling | UCL Erhvervsakademi (2018)",
      "🎓 Datamatiker | UCL Erhvervsakademi (2014 – 2017)"
    ],
    "contact": {
      "description": "Jeg er altid interesseret i spændende projekter og nye udfordringer. Har du et spørgsmål eller en stilling jeg bør høre om?",
      "emailLabel": "Send Email",
      "email": "seyyit.sahin@outlook.com"
    }
  },

  en: {
    "meta": { "title": "Seyyit Sahin - CV" },
  hero: {
    name: "Seyyit Sahin",
    bioHtml:
      "Computer Scientist, Software Developer & Tech Enthusiast with a background in web and software development from <a href='https://www.ucl.dk' target='_blank'>UCL Business Academy and University College</a>.",
    email: "👉 seyyit.sahin@outlook.com",
  },
    "sections": {
      "skills": "Skills & Qualifications",
      "projects": "Projects & Achievements",
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
      "✔️ Fast and solution-oriented approach",
      "✔️ Experience with software development lifecycle from concept to delivery",
      "✔️ UI/UX-minded with design that stands out",
      "✔️ Ability to translate complex requirements into intuitive solutions",
      "✔️ Strong communicator and team player"
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
      "🎓 Bachelor's in Web Development | UCL University College (2023 – 2025)",
      "🎓 Bachelor's in Software Development | UCL University College (2018)",
      "🎓 AP Graduate in Computer Science | UCL University College (2014 – 2017)"
    ],
    "contact": {
      "description": "I'm always interested in exciting projects and new challenges. Feel free to reach out.",
      "emailLabel": "Send Email",
      "email": "seyyit.sahin@outlook.com"
    }
  }
};
