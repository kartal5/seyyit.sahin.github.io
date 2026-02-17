import Link from "next/link";

export default function NotFound() {
  return (
    <div id="container--main" style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "20px", color: "var(--text-main)" }}>404</h1>
      
      <h2 style={{ marginBottom: "10px", color: "var(--text-main)" }}>
        Siden blev ikke fundet / Page not found
      </h2>
      
      <p style={{ marginBottom: "40px", color: "var(--text-light)" }}>
        Det ser ud til, at denne side ikke eksisterer.<br />
        It looks like this page doesnt exist.
      </p>

      <div className="project-links" style={{ justifyContent: "center" }}>
        <Link className="project-btn" href="/">
          ← Gå til forsiden / Go to home
        </Link>
      </div>
    </div>
  );
}