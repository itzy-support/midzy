import Container from "@/components/Container";
import GridContainer from "@/components/GridContainer";
import supportData from "@/data/supports.json";
// import { useState } from "react";

type support = {
  id: number;
  cover: string;
};

const App = () => {
  // const [selected, setSelected] = useState();
  const supports: support[] = supportData;

  return (
    <Container>
      <GridContainer>
        <div className="col-span-6 flex justify-center items-center h-screen">
          <h1 className="text-5xl">ABCDEFG</h1>
        </div>

        <div className="col-span-6 flex justify-center items-center">Test</div>
      </GridContainer>

      <div className="col-span-12 relative flex p-4">
        <div className="absolute left-0 inset-y-0 w-12 flex justify-center items-center bg-gradient-to-r from-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className="flex gap-8 overflow-x-scroll snap-x scrollbar-hide">
          {supports.map(({ cover }: support) => (
            <img
              src={`./images/covers/${cover}`}
              alt=""
              className="max-w-56 aspect-[148/210] object-cover snap-start rounded-lg shadow-xl shadow-slate-300"
            />
          ))}
        </div>

        <div className="absolute right-0 inset-y-0 w-12 flex justify-center items-center bg-gradient-to-l from-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default App;
