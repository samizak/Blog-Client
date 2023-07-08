import React from "react";
import Navbar from "../components/Navbar";

async function getData(id: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Article({ searchParams }: any) {
  let title = "";
  let content = "";
  let createdAt = "";

  if (searchParams["id"]) {
    const data = await getData(searchParams["id"]);
    ({ title, content, createdAt } = data.post);
    createdAt = new Date(createdAt).toLocaleDateString("en-US");
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center px-48 py-16 align-middle">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xs font-light">{"Created at: " + createdAt}</p>
        <div className="mt-4">
          {content
            .split("\n")
            .filter(Boolean)
            .map((e) => {
              return <p className="mb-3">{e}</p>;
            })}
        </div>
      </div>
    </div>
  );
}
