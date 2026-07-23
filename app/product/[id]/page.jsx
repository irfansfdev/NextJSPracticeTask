import Image from "next/image";

export default async function Product({ params }) {
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Product Detail</h1>

      <p className="text-xl mt-4">
        Product ID: {id}
      </p>

      <div className="mt-5">
        <Image
          src="/one-punch-man-ok-rs-3840x2160.jpg"
          alt="one punch man meme"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}