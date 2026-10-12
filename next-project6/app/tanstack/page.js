import TanStackMenu from "./TanStackMenu";
export const metadata = { title: "TanStack Query Demo" };
export default function TanStackPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Alternative client cache</p>
        <h1>TanStack Query demo</h1>
        <p className="lead">
          This separate page demonstrates useQuery, useMutation, query keys and
          invalidating the cart query after adding a dish.
        </p>
      </section>
      <TanStackMenu />
    </main>
  );
}
