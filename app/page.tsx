import ArticleList from "./components/ArticleList";

export default async function Home() {
  return (
    <main className="py-7 px-48">
      This is my blog
      <ArticleList />
    </main>
  );
}
