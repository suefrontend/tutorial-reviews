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
        <>
          <ArticleList
            key={article.id}
            title={article.title}
            content={article.content}
          />
          <h2>TITLE: {article.title}</h2>
          <p>CONTENT: {article.content}</p>
        </>
      ))}
    </main>
  );
}
