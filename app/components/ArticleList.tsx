import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import ArticleItem from "./ArticleItem";

interface Post {
  id: number;
  title: string;
  content: string;
}

async function ArticleList() {
  const result = await prisma.post.findMany();
  console.log("result", result);

  return (
    <div className="flex">
      {result.map((article) => (
        <ArticleItem
          key={article.id}
          content={article.content}
          title={article.title}
        />
      ))}
    </div>
  );
}

export default ArticleList;
