// app/layout.js

import "../app/style/globals.css"; // Global styles
import Navbar from "./components/navbar/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} {/* Render page-specific content */}
      </body>
    </html>
  );
}
