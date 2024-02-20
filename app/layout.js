import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-w-full">
          <NavBar />
          {children}
      </body>
    </html>
  );
}
