import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type postProps = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    console.log("post", post);
    if (req.method === "POST") {
      if (!post.title.length) {
        return res
          .status(500)
          .json({ message: "Please do not leave this empty" });
      }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
          },
        });
      } catch (error) {
        return res.status(500).json({ message: "Error creating a new post" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
