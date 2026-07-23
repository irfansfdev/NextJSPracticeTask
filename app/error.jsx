"use client";

export default function Error({ error, reset }) {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">
        Something went wrong!
      </h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
      >
        Try Again
      </button>
    </div>
  );
}