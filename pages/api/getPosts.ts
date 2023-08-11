import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.post.findMany();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
// import { db } from "@vercel/postgres";

// export default async function handler(req, res) {
//   const client = await db.connect();

//   try {
//     // await client.sql`CREATE TABLE Pets(Name varchar(255), Owner varchar(255))`;
//     // const names = ["kayano", "minako"];
//     // await client.sql`INSERT INTO Pets (Name, Owner) VALUES(${names[0]}, ${names[1]})`;

//     const posts = await client.sql`SELECT * FROM posts`;
//     return res.status(200).json({ posts });
//   } catch (error) {
//     return res.status(500).json({ error });
//   }

//   const pets = await client.sql`SELECT * FROM Pets`;
//   return res.status(200).json({ pets });
// }
