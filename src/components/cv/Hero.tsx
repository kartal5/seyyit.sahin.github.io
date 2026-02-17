import Image from "next/image";

type Props = {
  name: string;
  bioHtml: string;
  email: string;
};

export default function Hero({ name, bioHtml, email }: Props) {
  const cleanEmail = email.replace("👉", "").trim();
  return (
    <section className="section--page" id="wrapper--hero">
      <Image
        id="profile-pic"
        src="/images/profile_pic.webp"
        alt={`${name} profile picture`}
        width={175}
        height={175}
        priority
      />

      <div>
        <h1 id="user-name">{name}</h1>
        <p id="bio" dangerouslySetInnerHTML={{ __html: bioHtml }} />
        <p id="email">
          👉 <a href={`mailto:${cleanEmail}`}>{cleanEmail}</a>
        </p>
      </div>
    </section>
  );
}