/**
 * Site footer. Plain server component (no "use client" needed since it has
 * no interactivity/state) — rendered on every page via app/layout.js.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* EDIT ME: your name */}
      <p style={{ margin: 0 }}>
        &copy; {year} Hudson Hall
      </p>
    </footer>
  );
}
