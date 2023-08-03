import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log("Error", res);
  }
  return res.json();
}
export default async function Home() {
  const data = await getPosts();
  console.log("data", data);
  return (
    <main className="py-7 px-48">
      <Link
        href="/dashboard"
        className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md"
      >
        Go to the dashboard
      </Link>
    </main>
  );
}
