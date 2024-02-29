'use client';

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hello, About Page!</h1>
      <div>
        <h2>Page level nav links</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}