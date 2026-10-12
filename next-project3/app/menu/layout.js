import MenuSidebar from "../../components/MenuSidebar";

export default function MenuLayout({ children }) {
  return (
    <div className="container menu-layout">
      <MenuSidebar />

      <section className="menu-main">{children}</section>
    </div>
  );
}
