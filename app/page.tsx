import dotenv from "dotenv";
import { IBlogArticle } from "./components/IBlogArticle";
import Navbar from "./components/Navbar";
import ArticleCard from "./components/ArticleCard";

dotenv.config();

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const json = await res.json();
  return json.blogPosts;
}

export default async function Home() {
  const data: IBlogArticle[] = await getData();

  return (
    // <Article />

    <main className="">
      <Navbar />

      <div className="flex flex-col w-full bg-gray-200 border-b-2">
        <div className="flex flex-col gap-8 m-8">
          <h1 className="text-5xl font-bold">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 place-items-center">
        {data.map((blogArticle) => {
          return <ArticleCard blogArticle={blogArticle} />;
        })}
      </div>
    </main>
  );
}
