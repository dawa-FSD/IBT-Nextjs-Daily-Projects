import OrderForm from "@/components/OrderForm";

export const metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <main className="page" id="main-content">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Almost there</span>
          <h1>Checkout demo</h1>
          <p>
            Practise form submission, client-side validation, loading states,
            and accessible feedback.
          </p>
        </header>
        <div className="form-layout">
          <OrderForm />
          <aside className="summary">
            <span className="pill">Learning environment</span>
            <h2>Before you submit</h2>
            <ul className="list-clean">
              <li>Complete all required fields.</li>
              <li>Use a valid contact number.</li>
              <li>The button shows a loading state for 1.5 seconds.</li>
              <li>A demo reference appears after simulated success.</li>
            </ul>
            <p className="muted">
              Real checkout needs a server API, server-side validation, database
              persistence, authentication where appropriate, and a trusted
              payment provider integration.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
