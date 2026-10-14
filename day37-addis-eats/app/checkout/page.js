export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <section className="container checkout-page">
      <h1>Checkout</h1>

      <form className="checkout-form">
        <label>
          Full Name
          <input type="text" name="name" />
        </label>

        <label>
          Phone
          <input type="tel" name="phone" />
        </label>

        <label>
          Delivery Area
          <input type="text" name="area" />
        </label>

        <button type="submit" className="primary-button">
          Place Order
        </button>
      </form>
    </section>
  );
}
