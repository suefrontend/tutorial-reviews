const prisma = new PrismaClient();
import { PrismaClient } from "@prisma/client";
import ArticleItem from "./ArticleItem";

interface Post {
  id: string;
  title: string;
  content: string;
}

async function ArticleList({ id, title, content }: Post) {
  // const result = await prisma.post.findMany();
  // console.log("result", result);

  return (
    <div className="flex flex-col">
      <ArticleItem key={id} title={title} content={content} />
    </div>
  );
}

export default ArticleList;
