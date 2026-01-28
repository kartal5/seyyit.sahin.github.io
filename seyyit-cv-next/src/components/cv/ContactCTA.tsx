type Props = {
  title: string;
  description: string;
  emailLabel: string;
  email: string;
};

export default function ContactCTA({
  title,
  description,
  emailLabel,
  email,
}: Props) {
  return (
    <section className="section--page section--cta">
      <div className="cta-wrapper">
        <h2>{title}</h2>
        <p className="cta-description">{description}</p>

        <div className="cta-links">
          <a className="cta-link cta-link--primary" href={`mailto:${email}`}>
            <span>{emailLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
