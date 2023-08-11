import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import ArticleItem from "./ArticleItem";

interface Post {
  id: number;
  title: string;
  content: string | null;
}

async function ArticleList() {
  const result = await prisma.post.findMany();
  console.log("result", result);

  return (
    <div className="flex flex-col">
      {result.map((article) => (
        <ArticleItem
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default ArticleList;
