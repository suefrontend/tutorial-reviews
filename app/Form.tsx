"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();

    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    const res = await data.json();
    router.refresh();
    setTitle("");
    if (!res.ok) console.log(res.message);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black"
      />
      <button type="submit">POST</button>
    </form>
  );
};

export default Form;