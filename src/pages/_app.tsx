import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>
      <header>
        <Link href={"/"}>Home</Link>&nbsp;&nbsp;&nbsp;
        <Link href={"/search"}>Search</Link>&nbsp;&nbsp;&nbsp;
        <Link href={"/sales/1"}>1번 상품</Link>&nbsp;&nbsp;&nbsp;
        <button onClick={() => {router.push('/sales/2')}}>2번 상품</button>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
