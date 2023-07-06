import React from "react";
import { IBlogArticle } from "./IBlogArticle";

export default function ArticleCard({ blogArticle }: { blogArticle: IBlogArticle }) {
  return (
    <div className="flex flex-col justify-between w-56 h-56 px-6 py-8 text-xs text-center align-middle shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{blogArticle.title}</h1>
        <p className="font-light line-clamp-3">{blogArticle.content}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="">{new Date(blogArticle.createdAt).toDateString()}</p>
        <button className="w-full p-1 bg-gray-200">View Post</button>
      </div>
    </div>
  );
}
