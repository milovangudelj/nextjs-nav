'use client'
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h1>This is the Home page</h1>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </main>
  );
}
