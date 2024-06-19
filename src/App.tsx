import supportData from "@/data/supports.json";
import { useState } from "react";

type support = {
  id: number;
  title: string;
  description: string;
  cover: string;
  photo: string;
};

const App = () => {
  const supports: support[] = supportData;
  const [selected, setSelected] = useState<support>(supports[0]);

  const imageStyle = (id: number): string => {
    const base =
      "max-w-52 aspect-[148/210] object-cover snap-center border border-solid border-gray-200 rounded-lg drop-shadow-xl hover:cursor-pointer";
    if (selected.id === id) {
      return base + " transition -translate-y-3 scale-105";
    } else {
      return base + " transition hover:-translate-y-2";
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="container grid grid-cols-2 h-full p-4 mx-auto">
        <div className="my-auto flex flex-col gap-2">
          <h1 className="text-5xl font-bold">
            <span className="text-itzy">{selected.title[0]}</span>
            {selected.title.substring(1)}
          </h1>
          <p>{selected.description}</p>

          <a className="font-semibold mt-2 cursor-pointer hover:text-itzy transition duration-300 ease-in-out">
            보러가기✨
          </a>
        </div>

        <div className="m-auto">
          <img src={`./images/photos/${selected.photo}`} className="max-w-96 rounded-3xl shadow-2xl shadow-gray-400" />
        </div>
      </div>

      <div className="w-full flex mt-auto">
        <div className="flex gap-4 py-6 px-6 overflow-x-scroll snap-x scrollbar-hide">
          {supports.map((support: support) => (
            <img
              key={support.id}
              src={`./images/covers/${support.cover}`}
              alt=""
              className={imageStyle(support.id)}
              onClick={() => setSelected(support)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
