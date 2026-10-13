import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-brand" href="/">
          ADDIS <span>EATS.</span>
        </Link>
        <p>Good food brings us together.</p>
        <span className="footer-copy">
          © 2026 Addis Eats · Learning project demo
        </span>
      </div>
    </footer>
  );
}
