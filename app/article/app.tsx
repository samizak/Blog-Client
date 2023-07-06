import React from "react";
import Navbar from "../components/Navbar";

export default function Article() {
  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col justify-center px-48 py-16 align-middle">
        <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  );
}
