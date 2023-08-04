"use client";
import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();

    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    const res = await data.json();
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
