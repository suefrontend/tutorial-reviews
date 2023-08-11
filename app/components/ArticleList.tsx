const prisma = new PrismaClient();
import { PrismaClient } from "@prisma/client";
import ArticleItem from "./ArticleItem";

interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) console.log(res);

  return res.json();
}

interface ArticleListProps {
  id: string;
  title: string;
  content: string;
}

async function ArticleList() {
  const data: { id: string; title: string; content: string }[] =
    await getPosts();
  console.log("data", data);

  return (
    <div className="flex flex-col">
      {data.map((article) => (
        <ArticleItem
          key={article.id}
          title={article.title}
          content={article.content}
          id={article.id}
        />
      ))}
    </div>
  );
}

export default ArticleList;
