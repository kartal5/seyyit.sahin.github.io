type Props = {
  title: string;
  items: string[];
};

export default function Education({ title, items }: Props) {
  return (
    <section className="section--page">
      <h2>{title}</h2>

      <ul>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}
