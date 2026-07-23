import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link href="/" className="mt-5 text-blue-500">
        Go Back Home
      </Link>
    </div>
  );
}
