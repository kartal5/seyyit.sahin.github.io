import Link from "next/link";

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
  return (
    <section className="section--page">
      <h2>{title}</h2>

      {projects.map((p) => (
        <div key={p.slug} className="card--project card--project-clickable">
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
