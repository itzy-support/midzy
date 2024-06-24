import { MessageBook } from "@/types";
import { getMessageBookURL } from "@/utils";
import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MessageBookViewr = () => {
  const messageBook: MessageBook = useLoaderData() as MessageBook;
  const { pages, path, contents } = messageBook;

  const moveIndex = (index: number): void => {
    location.href = `#${index}`;
  };

  const contentsNumbers = document.querySelectorAll(".contents-li").length;
  const height = `h-[${40 * contentsNumbers}px]`;

  const [displayIndex, setDisplayIndex] = useState<string>("h-0");
  const toggleDisplayIndex = () => {
    if (displayIndex === "h-0") {
      setDisplayIndex(height);
    } else {
      setDisplayIndex("h-0");
    }
  };

  return (
    <main className="container mx-auto p-4 grid grid-cols-2 gap-1.5 relative">
      {[...Array(pages)].map((_, index) => (
        <img
          key={index}
          id={String(index)}
          src={getMessageBookURL(path, index)}
          className="col-span-2 xl:col-span-1 aspect-[640/903] object-cover rounded-lg drop-shadow-lg"
        />
      ))}

      {contents && (
        <div className="fixed bottom-4 right-5 h-screen flex flex-col gap-2 justify-end items-end">
          <ul
            className={
              "bg-white rounded-md drop-shadow-md overflow-hidden transition-[height] duration-300 ease-in-out " +
              displayIndex
            }
          >
            {contents.map(
              (content) =>
                !content.hidden && (
                  <li
                    key={content.index}
                    className="py-2 px-4 hover:text-itzy-500 transition duration-300 ease-in-out cursor-pointer contents-li"
                    onClick={() => moveIndex(content.index as number)}
                  >
                    {content.entry}
                  </li>
                )
            )}
          </ul>

          <button
            className="w-fit aspect-square p-3 bg-white rounded-full drop-shadow-md hover:text-itzy-500 transition duration-300 ease-in-out"
            onClick={toggleDisplayIndex}
          >
            <FontAwesomeIcon icon={faListUl} size="lg" />
          </button>
        </div>
      )}
    </main>
  );
};

export default MessageBookViewr;
