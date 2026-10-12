export default async function RootLayout({ children }) {
  return (
    <main>
      <div>
        <h1>Addis Eats Ethiopian Food</h1>
      </div>
      {children}

      <footer>
        <p>@2026 Addis Eats delecias food</p>
      </footer>
    </main>
  );
}
