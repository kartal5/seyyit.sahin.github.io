type Props = {
  name: string;
  bio: string;
  email: string;
};

export default function Hero({ name, bio, email }: Props) {
  return (
    <section className="section--page" id="wrapper--hero">
      <div>
        <h1 id="user-name">{name}</h1>
        <p id="bio">{bio}</p>
        <p id="email">{email}</p>
      </div>
    </section>
  );
}
