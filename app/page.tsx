import dotenv from "dotenv";
import { IBlogArticle } from "./components/IBlogArticle";
import Navbar from "./components/Navbar";
import ArticleCard from "./components/ArticleCard";
import Dashboard from "./dashboard/page";

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
    <Dashboard />
  );
}
