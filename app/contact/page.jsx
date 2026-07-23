export default async function Contact() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1 className="text-xl mt-10">Contact Us</h1>
      <p>This is the Contact page</p>
    </div>
  );
}
