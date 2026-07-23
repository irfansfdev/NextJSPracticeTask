/* import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/contact">Contact</Link>
    </nav>
  );
} */

  import Link from "next/link";

  export default function Navbar(){
    return(
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link> |{" "}
        <Link href="/contact">Contact</Link> | {" "}
        <Link href="/product">Product</Link>
      </nav>
    )
  }

