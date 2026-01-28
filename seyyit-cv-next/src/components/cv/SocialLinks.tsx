type Props = {
  resumeLabel: string;
  resumeHref: string;
  linkedinLabel: string;
  linkedinHref: string;
  githubLabel: string;
  githubHref: string;
};

export default function SocialLinks({
  resumeLabel,
  resumeHref,
  linkedinLabel,
  linkedinHref,
  githubLabel,
  githubHref,
}: Props) {
  return (
    <section className="section--page">
      <div id="socials--list">
        <a id="cv-download-btn" href={resumeHref}>
          {resumeLabel}
        </a>

        <a href={linkedinHref} target="_blank" rel="noreferrer">
          {linkedinLabel}
        </a>

        <a href={githubHref} target="_blank" rel="noreferrer">
          {githubLabel}
        </a>
      </div>
    </section>
  );
}
