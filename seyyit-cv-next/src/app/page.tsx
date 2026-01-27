import Link from "next/link";
import { cvContent } from "@/content/cv-data";
import type { CSSProperties } from "react";


export default function Page() {
  const c = cvContent.da;

  return (
    <div id="container--main">
      <section className="section--page" id="wrapper--hero">
        <div>
          <h1 id="user-name">{c.hero.name}</h1>
          <p id="bio">{c.hero.bio}</p>
          <p id="email">{c.hero.email}</p>
        </div>
      </section>

      <section className="section--page">
        <div id="socials--list">
          <a id="cv-download-btn" href={c.socials.resumeHref}>
            {c.socials.resumeLabel}
          </a>

          <a href={c.socials.linkedinHref} target="_blank" rel="noreferrer">
            {c.socials.linkedinLabel}
          </a>

          <a href={c.socials.githubHref} target="_blank" rel="noreferrer">
            {c.socials.githubLabel}
          </a>
        </div>
      </section>

      <section className="section--page">
        <h2>{c.sections.techstack}</h2>
        <div id="wrapper--techstack__items">
          {c.techStack.map((item, i) => (
            <div
              key={item}
              className="card--techstack"
              style={{ "--card-index": i } as CSSProperties}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section--page">
        <h2>{c.sections.projects}</h2>

        {c.homeProjects.map((p) => (
          <div key={p.slug} className="card--project card--project-clickable">
            {p.external ? (
              <a href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </a>
            ) : (
              <Link href={p.href}>{p.title}</Link>
            )}

            <span className="project-link-indicator">{p.linkLabel}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
