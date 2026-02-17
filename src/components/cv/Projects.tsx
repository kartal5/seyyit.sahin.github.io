"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type HomeProject = {
  slug: string;
  title: string;
  linkLabel: string;
  href: string;
  external: boolean;
};

type Props = {
  title: string;
  projects: HomeProject[];
};

export default function Projects({ title, projects }: Props) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, href: string, external: boolean) => {
    // If user clicks directly on the actual <a> link text, let the browser handle it
    if ((e.target as HTMLElement).closest("a")) return;

    if (e.metaKey || e.ctrlKey || external) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <section className="section--page">
      <h2>{title}</h2>

      {projects.map((p) => (
        <div 
          key={p.slug} 
          className="card--project card--project-clickable"
          onClick={(e) => handleCardClick(e, p.href, p.external)}
        >
          {p.external ? (
            <a href={p.href} target="_blank" rel="noreferrer">
              <span>🏆 </span><span>{p.title}</span>
            </a>
          ) : (
            <Link href={p.href}>
              <span>🏆 </span><span>{p.title}</span>
            </Link>
          )}

          <div className="project-link-indicator">{p.linkLabel}</div>
        </div>
      ))}
    </section>
  );
}