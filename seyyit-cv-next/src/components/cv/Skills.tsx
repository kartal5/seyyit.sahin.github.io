type Props = {
  title: string;
  items: string[];
};

export default function Skills({ title, items }: Props) {
  return (
    <section className="section--page">
      <h2>{title}</h2>

      <ul id="qualifications--list">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}
