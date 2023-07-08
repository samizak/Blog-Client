"use client";

import React from "react";
import { IBlogArticle } from "./IBlogArticle";
import Link from "next/link";

export default function ArticleCard({ blogArticle }: { blogArticle: IBlogArticle }) {
  return (
    <div className="flex flex-col justify-between w-56 h-56 px-6 py-8 text-xs text-center align-middle shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{blogArticle.title}</h1>
        <p className="font-light line-clamp-3">{blogArticle.content}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="">{new Date(blogArticle.createdAt).toDateString()}</p>

        <Link
          className="w-full p-1 bg-gray-200"
          // className="flex px-3 py-2 mt-4 text-sm text-white align-middle transition-colors bg-green-600 rounded cursor-pointer hover:bg-green-800 w-fit"
          href={{
            pathname: "/article",
            query: { id: blogArticle._id },
          }}
        >
          View Post
        </Link>
      </div>
    </div>
  );
}

async function ViewPost(blogArticle: IBlogArticle) {}
