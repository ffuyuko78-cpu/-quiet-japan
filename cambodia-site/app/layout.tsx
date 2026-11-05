import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "思い出のはいとう | カンボジアの旅",
  description: "カンボジア旅行の思い出の写真集",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
