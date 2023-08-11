import ArticleList from "./components/ArticleList";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) console.log(res);

  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string; content: string }[] =
    await getPosts();
  console.log("data", data);

  return (
    <main className="py-7 px-48">
      Blog!
      {data.map((article) => (
        <div>
          <h3>Title: {article.title}!!!</h3>
          <p>Content: {article.content}</p>
        </div>
      ))}
    </main>
  );
}
