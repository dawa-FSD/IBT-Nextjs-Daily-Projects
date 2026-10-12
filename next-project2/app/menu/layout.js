import MenuSidebar from "../../components/MenuSidebar";

export default function MenuLayout({ children }) {
  return (
    <div className="menu-layout">
      <MenuSidebar />
      <section className="menu-content">{children}</section>
    </div>
  );
}
