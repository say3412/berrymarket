import Link from "next/link";
import style from "./global-layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // narootlayout
  return (
    <div className={style.container}>
      <header>
        <Link href={"/"}>🍓BerryMarket</Link>
      </header>
      <main>{children}</main>
      <footer>🍓BerryMarket : 010-0011-2938</footer>
    </div>
  );
}
