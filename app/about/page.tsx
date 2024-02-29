import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1>Hello, About Page!</h1>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </div>
    );
}