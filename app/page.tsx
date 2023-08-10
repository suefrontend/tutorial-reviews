import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const result = await prisma.post.findMany();
  console.log("result", result);

  return (
    <main className="py-7 px-48">
      Blog!
      {result.map((el) => (
        <>
          <h2>{el.title}</h2>
          <p>{el.content}</p>
        </>
      ))}
    </main>
  );
}
