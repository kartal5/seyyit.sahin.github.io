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

  // Loads the Danish content
  const p = getProject("da", slug);

  return (
    <div id="container--main" className="project-page">
      <Link className="back-link" href="/">
        {p.backLabel}
      </Link>

      <div className="project-hero">
        <h1 dangerouslySetInnerHTML={{ __html: p.heading }} />
        <p className="project-summary" dangerouslySetInnerHTML={{ __html: p.paragraphs[0] }} />
      </div>

      <div className="project-links">
        <a className="project-btn" href={p.links.liveDemoHref} target="_blank" rel="noreferrer">
          🌐 {p.links.liveDemoLabel}
        </a>
        <a className="project-btn" href={p.links.sourceCodeHref} target="_blank" rel="noreferrer">
          💻 {p.links.sourceCodeLabel}
        </a>
      </div>

      <div className="project-details">
        {/* Left Column (Tech Stack & Paragraphs) */}
        <div className="project-column">
          <h3>Tech Valg</h3>
          <div id="wrapper--techstack__items">
            {p.techStack.map((t, i) => (
              <div 
                key={t} 
                className="card--techstack"
                style={{ "--card-index": i } as React.CSSProperties}
              >
                <span>{t}</span>
              </div>
            ))}
          </div>

          {p.paragraphs.slice(1).map((para, i) => (
            <p key={i} className="details-text" dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>

        {/* Right Column (Key Features) */}
        <div className="project-column">
          <h3>Nøgle Features</h3>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}