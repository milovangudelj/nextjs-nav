import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};