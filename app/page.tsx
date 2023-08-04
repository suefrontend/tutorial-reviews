import Link from "next/link";
import Form from "./Form";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log("Error", res);
  }
  return res.json();
}
export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();

  return (
    <main className="py-7 px-48">
      <Link
        href="/dashboard"
        className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md"
      >
        Go to the dashboard
      </Link>
      {data.map((post) => (
        <h1>{post.title}</h1>
      ))}
      <Form />
    </main>
  );
}
