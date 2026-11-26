export default function Pills({ items }) {
  return <ul className="pills">{items.map((t) => <li key={t}>{t}</li>)}</ul>
}
