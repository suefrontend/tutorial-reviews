import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "tutorial" });
  console.log("entries", entries)
  return entries;
};

export default async function Home() {
  const blogEntries = await getBlogEntries();

  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
        <div className="flex gap-10">
          <Sidebar />
          <Main blog={blogEntries} />
        </div>
      </div>
    </div>
  );
}
