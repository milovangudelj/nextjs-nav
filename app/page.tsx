import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div>Home page</div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </main>
  );
}
