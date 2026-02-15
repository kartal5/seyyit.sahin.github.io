import { cvContent } from "@/content/cv-data";

import Hero from "@/components/cv/Hero";
import SocialLinks from "@/components/cv/SocialLinks";
import Skills from "@/components/cv/Skills";
import Projects from "@/components/cv/Projects";
import TechStack from "@/components/cv/TechStack";
import WorkHistory from "@/components/cv/WorkHistory";
import Education from "@/components/cv/Education";
import ContactCTA from "@/components/cv/ContactCTA";

export default function Page() {
  const c = cvContent.da;

  return (
    <div id="container--main">
      <Hero name={c.hero.name} bioHtml={c.hero.bioHtml} email={c.hero.email} />

      <SocialLinks
        resumeLabel={c.socials.resumeLabel}
        resumeHref={c.socials.resumeHref}
        linkedinLabel={c.socials.linkedinLabel}
        linkedinHref={c.socials.linkedinHref}
        githubLabel={c.socials.githubLabel}
        githubHref={c.socials.githubHref}
      />

      <Skills title={c.sections.skills} items={c.skills} />

      <Projects title={c.sections.projects} projects={c.homeProjects} />

      <TechStack title={c.sections.techstack} items={c.techStack} />

      <WorkHistory title={c.sections.work} items={c.workHistory} />

      <Education title={c.sections.education} items={c.education} />

      <ContactCTA
        title={c.sections.contact}
        description={c.contact.description}
        emailLabel={c.contact.emailLabel}
        email={c.contact.email}
      />
    </div>
  );
}
