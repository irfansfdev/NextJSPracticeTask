
export default async function about() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

  return(
    <div className="text-xl mt-10">
      <h1>Welcome to our About Page</h1>
      <p>This is our landing page &apos;s About Section.</p>
      
    </div>
  );
}