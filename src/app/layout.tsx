import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/components/TopNav";

export const metadata: Metadata = {
  title: "tcGallery",
  description: "A simple image gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
