import { NextApiRequest, NextApiResponse } from "next";
// import { sql } from "@vercel/postgres";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const result = await prisma.user.findMany();
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
