import "./globals.css";
import Navbar from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "My App",
  description: "Learning Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-center mt-10">
        <Navbar />
        {children}
      </body>
    </html>
  );
}