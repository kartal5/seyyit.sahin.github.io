export default function Page() {
  return (
    <div id="container--main">
      <section className="section--page" id="wrapper--hero">
        <div>
          <h1 id="user-name">Seyyit Sahin</h1>
          <p id="bio">Next.js migration in progress.</p>
          <p id="email">you@email.com</p>
        </div>
      </section>

      <section className="section--page">
        <div id="socials--list">
          <a href="#">Resume</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </section>

      <section className="section--page">
        <div id="wrapper--techstack__items">
          <div className="card--techstack">C#</div>
          <div className="card--techstack">ASP.NET</div>
          <div className="card--techstack">React</div>
        </div>
      </section>
    </div>
  );
}