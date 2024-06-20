import { MessageBook } from "@/types";
import { getImageURL, getThumbnailURL } from "@/utils";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MessageBookPage: React.FC = () => {
  const messageBooks: MessageBook[] = useLoaderData() as MessageBook[];
  const [selected, setSelected] = useState<MessageBook>(messageBooks[0]);

  const imageStyle = (id: number): string => {
    const base = "max-w-52 aspect-[148/210] object-cover snap-center rounded-lg drop-shadow-xl hover:cursor-pointer";
    if (selected.id === id) {
      return base + " transition -translate-y-3 scale-105";
    } else {
      return base + " transition hover:-translate-y-2";
    }
  };

  const navigate = useNavigate();
  const goDetail = (support: MessageBook): void => {
    navigate(`/messagebook/${support.id}`, {
      state: support,
    });
  };

  return (
    <main className="w-screen h-screen flex flex-col">
      {/* 히어로 */}
      <section
        className="h-full p-6 mb-4 flex bg-cover drop-shadow-lg relative"
        style={{ backgroundImage: `url('${getImageURL(selected.photos[0])}')` }}
      >
        <div className="mt-auto flex flex-col gap-2 p-4 rounded-2xl text-white z-10">
          <h1 className="text-5xl font-bold">{selected.title}</h1>
          <p>{selected.description}</p>

          <a
            className="font-semibold mt-2 cursor-pointer hover:text-itzy-500 transition duration-300 ease-in-out"
            onClick={() => goDetail(selected)}
          >
            상세정보✨
          </a>
        </div>

        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/10"></div>
      </section>

      {/* 리스트 */}
      <div className="w-full mt-auto pt-2">
        <span className="px-7 text-xl font-semibold">메시지북</span>

        <div className="flex gap-4 py-6 px-6 overflow-x-scroll snap-x scrollbar-hide">
          {messageBooks.map((support: MessageBook) => (
            <img
              key={support.id}
              src={getThumbnailURL(support.cover)}
              alt={support.title}
              className={imageStyle(support.id)}
              onClick={() => setSelected(support)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MessageBookPage;
