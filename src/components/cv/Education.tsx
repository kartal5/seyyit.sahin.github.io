type Props = {
  title: string;
  items: string[];
};

export default function Education({ title, items }: Props) {
  return (
    <section className="section--page">
      <h2>{title}</h2>

      {items.map((x) => (
        <div key={x} className="card--project">
          <span>{x}</span>
        </div>
      ))}
    </section>
  );
}