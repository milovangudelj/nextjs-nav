import Link from "next/link";

export const Navbar = () => {
  return (
    <div style={{ border: '1px solid black' }}>
      <h2>Root layout level nav links</h2>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};