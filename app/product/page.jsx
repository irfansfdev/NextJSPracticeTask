import Link from "next/link";

export default function Products() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Products</h1>

      <ul className="mt-5 space-y-2">
        <li>
          <Link href="/product/1">Product 1</Link>
        </li>

        <li>
          <Link href="/product/2">Product 2</Link>
        </li>

        <li>
          <Link href="/product/3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
}