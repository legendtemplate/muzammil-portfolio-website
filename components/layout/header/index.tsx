import dynamic from "next/dynamic";
const Number = dynamic(() => import("./number"));
const Social = dynamic(() => import("./social"));

export default function index() {
  return (
    <div className="py-4 pr-2 text-white dark:bg-black bg-gray-300">
    <div className="container mx-auto flex items-center justify-between">
      <div className="basis-1/4 ">
        <Social />
      </div>
      <div className="basis-3/4 ">
        <Number />
      </div>
    </div>
  </div>
  )
}
