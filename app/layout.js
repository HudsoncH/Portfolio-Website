import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * Root layout — wraps EVERY page in the app (home, /projects, and every
 * /projects/[slug] page all render inside this <html>/<body>).
 *
 * `metadata` here sets the site-wide default <title>/<meta description>.
 * Individual pages can override just the title by exporting their own
 * `metadata` (see app/projects/page.js for an example) — the `%s | ...`
 * template below fills in the page-specific part automatically.
 */
export const metadata = {
  title: {
    default: "Hudson Hall | Engineering Portfolio", // EDIT ME
    template: "%s | Hudson Hall", // EDIT ME (keep the %s)
  },
  description: "Engineering portfolio of Hudson Hall — projects, skills, and contact info.", // EDIT ME
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
