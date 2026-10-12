import Link from "next/link";

export default function CheckoutPage() {
  return (
    <section className="page">
      <div className="container">
        <div className="form-card">
          <div className="section-title">
            <h1>Checkout</h1>

            <p>Enter your information to place your order.</p>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="09xxxxxxxx"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter delivery address"
              />
            </div>

            <button type="submit" className="button">
              Place Order
            </button>
          </form>

          <br />

          <Link href="/cart">← Back to Cart</Link>
        </div>
      </div>
    </section>
  );
}
