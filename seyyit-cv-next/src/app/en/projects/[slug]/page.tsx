import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectSlugs, type ProjectSlug } from "@/content/projects";

export const dynamicParams = false;

function isProjectSlug(slug: string): slug is ProjectSlug {
  return (projectSlugs as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isProjectSlug(slug)) notFound();

  const p = getProject("en", slug);

  const labels = {
    features: "Highlights",
    tech: "Tech Stack",
  };

  return (
    <div id="container--main" className="project-page">
      <Link className="back-link" href="/en/">
        {p.backLabel}
      </Link>

      <div className="project-hero">
        <h1>{p.title}</h1>
        <p className="project-summary">{p.paragraphs[0]}</p>
      </div>

      <div className="project-links">
        <a className="project-btn" href={p.links.liveDemoHref} target="_blank" rel="noreferrer">
          {p.links.liveDemoLabel}
        </a>
        <a className="project-btn" href={p.links.sourceCodeHref} target="_blank" rel="noreferrer">
          {p.links.sourceCodeLabel}
        </a>
      </div>

      <div className="project-details">
        <div className="project-column">
          <h3>{labels.features}</h3>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="project-column">
          <h3>{labels.tech}</h3>
          <ul>
            {p.techStack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="details-text">
            {p.paragraphs.slice(1).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
