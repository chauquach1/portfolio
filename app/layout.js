import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
