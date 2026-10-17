export default function ConfigDemoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "Site URL not configured";
  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Exercise 06</span>
          <h1>Environment configuration</h1>
          <p>
            This server-rendered page displays a public configuration value.
          </p>
        </header>
        <section className="panel" style={{ maxWidth: 700 }}>
          <h2>Public site URL</h2>
          <p>
            <code className="code-note">{siteUrl}</code>
          </p>
          <p className="muted">
            Public values may be exposed to the browser. Never prefix database
            passwords, session secrets, or private payment keys with
            NEXT_PUBLIC_.
          </p>
        </section>
      </div>
    </main>
  );
}
