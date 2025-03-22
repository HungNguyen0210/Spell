import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  subsets: ["latin", "vietnamese"],
  weight: "400",
});

export const metadata = {
  title: "Spell App",
  description:
    "Bé Học Chữ Cái is an interactive educational application designed to help children learn the Vietnamese alphabet through engaging gameplay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${pacifico.className} antialiased`}>{children}</body>
    </html>
  );
}
