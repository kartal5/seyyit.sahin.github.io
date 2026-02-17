type WorkItem = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
};

type Props = {
  title: string;
  items: WorkItem[];
};

export default function WorkHistory({ title, items }: Props) {
  return (
    <section className="work-history-wrapper section--page">
      <h2>{title}</h2>

      {items.map((w) => (
        <div key={`${w.title}-${w.period}`}>
          <div className="line-break"></div>
          <div className="card--work-history">
            <strong>{w.title}</strong>
            <p>{w.period}</p>
            <p>{w.description}</p>

            {w.highlights?.length > 0 && (
              <ul>
                {w.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}