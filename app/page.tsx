import Navbar from "./components/Navbar";

export default function Home() {
  return (
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
        <div className="flex flex-col justify-between w-56 h-56 px-6 py-8 text-xs text-center align-middle shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Title here</h1>
            <p className="font-light">Some other stuff here</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="">06/07/2023</p>
            <button className="w-full p-1 bg-gray-200">View Post</button>
          </div>
        </div>
      </div>
    </main>
  );
}
