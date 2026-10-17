export const metadata = { title: "Event Lab" };

const demos = [
  {
    href: "/events-demo/form",
    title: "Form events",
    text: "Controlled inputs, onChange, onSubmit, and preventDefault.",
  },
  {
    href: "/events-demo/propagation",
    title: "Event propagation",
    text: "See how a nested button can stop a parent click handler.",
  },
  {
    href: "/events-demo/counter",
    title: "State counter",
    text: "Use a functional state updater to avoid stale state.",
  },
  {
    href: "/events-demo/keyboard",
    title: "Keyboard events",
    text: "Try Enter, Escape, and ArrowDown in an input.",
  },
  {
    href: "/events-demo/browser",
    title: "Browser event",
    text: "Read screen width in an effect and clean up a resize listener.",
  },
  {
    href: "/events-demo/config",
    title: "Environment config",
    text: "Read a public URL setting safely.",
  },
];

export default function EventsDemoPage() {
  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Hands-on practice</span>
          <h1>React event lab</h1>
          <p>
            Each exercise isolates one event-handling concept from Day 48. Open
            a demo, interact with it, and explain what changed.
          </p>
        </header>
        <div className="grid">
          {demos.map((demo) => (
            <article className="panel" key={demo.href}>
              <h2>{demo.title}</h2>
              <p className="muted">{demo.text}</p>
              <a className="btn btn-secondary" href={demo.href}>
                Open exercise →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
