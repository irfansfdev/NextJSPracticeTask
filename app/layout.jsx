import "./globals.css";
import Navbar from "@/Components/Navbar";

export default function RootLayout({
  children,
}) {
   return (
    <html lang="en">
      <body className="text-center mt-10">
        <Navbar />
        {children}
      </body>
    </html>
  );
}