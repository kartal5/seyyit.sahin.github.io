import { cvContent } from "@/content/cv-data";
import Hero from "@/components/cv/Hero";
import SocialLinks from "@/components/cv/SocialLinks";
import TechStack from "@/components/cv/TechStack";
import Projects from "@/components/cv/Projects";

export default function Page() {
  const c = cvContent.en;

  return (
    <div id="container--main">
      <Hero name={c.hero.name} bio={c.hero.bio} email={c.hero.email} />

      <SocialLinks
        resumeLabel={c.socials.resumeLabel}
        resumeHref={c.socials.resumeHref}
        linkedinLabel={c.socials.linkedinLabel}
        linkedinHref={c.socials.linkedinHref}
        githubLabel={c.socials.githubLabel}
        githubHref={c.socials.githubHref}
      />

      <TechStack title={c.sections.techstack} items={c.techStack} />

      <Projects title={c.sections.projects} projects={c.homeProjects} />
    </div>
  );
}
