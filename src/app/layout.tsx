/*
  File: layout.tsx
  Description: Simply contains the layout with only the children elements for optional extension to multiple pages in the future

  Responsible: Alex Miller
*/

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chopsticks Game",
  description: "A simple implementation of the Chopsticks game in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
