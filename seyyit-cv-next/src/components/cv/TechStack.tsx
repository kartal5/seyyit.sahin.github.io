import type { CSSProperties } from "react";

type Props = {
  title: string;
  items: string[];
};

export default function TechStack({ title, items }: Props) {
  return (
    <section className="section--page">
      <h2>{title}</h2>

      <div id="wrapper--techstack__items">
        {items.map((item, i) => (
          <div
            key={item}
            className="card--techstack"
            style={{ "--card-index": i } as CSSProperties}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
