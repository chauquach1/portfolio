import "./globals.css";
import NavBar from "./components/NavBar";
import LoadIn from "./components/load-in/LoadIn";

export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-w-full">
        <LoadIn />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
