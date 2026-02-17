type Props = {
  title: string;
  description: string;
  emailLabel: string;
  email: string;
  linkedinHref: string;
  githubHref: string;
};

export default function ContactCTA({
  title,
  description,
  emailLabel,
  email,
  linkedinHref,
  githubHref,
}: Props) {
  return (
    <section className="section--page section--cta">
      <div className="cta-wrapper">
        <h2>{title}</h2>
        <p className="cta-description">{description}</p>

        <div className="cta-links">
          <a className="cta-link cta-link--primary" href={`mailto:${email}`}>
            <span className="cta-icon">✉️</span>
            <span>{emailLabel}</span>
          </a>
          <a href={linkedinHref} target="_blank" rel="noreferrer" className="cta-link">
            <span className="cta-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href={githubHref} target="_blank" rel="noreferrer" className="cta-link">
            <span className="cta-icon">💻</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}