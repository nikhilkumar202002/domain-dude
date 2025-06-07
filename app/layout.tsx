import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata: Metadata = {
  title: "Domain Dude | Full-Service Digital Agency for Web Design, Marketing & Branding",
  description: "Discover Domain Dude – your creative partner for Web Development, Digital Marketing, UI/UX Design, Graphics, Branding & Video Production. We help startups to established brands grow with impactful digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
