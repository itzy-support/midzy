import { MessageBook } from "@/types";
import { getCoverURL, getPhotoURL } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MessageBookPage = () => {
  const navigate = useNavigate();

  const messageBooks: MessageBook[] = useLoaderData() as MessageBook[];
  const [selected, setSelected] = useState<MessageBook>(messageBooks[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = messageBooks.findIndex((messageBook) => messageBook.id === selected.id);

      let item;
      if (messageBooks.length - 1 > currentIndex) {
        item = messageBooks[currentIndex + 1];
      } else {
        item = messageBooks[0];
      }

      select(item);
    }, 5000);

    return () => clearInterval(interval);
  }, [selected, messageBooks]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const select = (messageBook: MessageBook): void => {
    const carousel = carouselRef.current as HTMLDivElement;
    const carouselWidth = carousel.clientWidth;
    const target = document.getElementById(String(messageBook.id)) as HTMLElement;
    const targetWidth = target.clientWidth;
    const targetLeft = target.offsetLeft;

    const scrollPosition = targetLeft - carouselWidth / 2 + targetWidth / 2;
    carousel.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });

    setSelected(messageBook);

    // 애니메이션 초기화
    const progressBar = progressBarRef.current as HTMLDivElement;
    progressBar.classList.remove("fill-animation");
    void progressBar.offsetWidth;
    progressBar.classList.add("fill-animation");
  };

  return (
    <main className="w-screen h-screen flex flex-col">
      {/* 히어로 */}
      <section
        className="h-full p-6 mb-4 flex bg-cover drop-shadow-lg relative"
        style={{ backgroundImage: `url('${getPhotoURL(selected.path, 0)}')` }}
      >
        <div className="mt-auto flex flex-col gap-1 p-1 rounded-2xl text-white z-10">
          <span className="text-sm opacity-55">{selected.date}</span>
          <h1 className="text-4xl font-bold">{selected.title}</h1>
          <p className="opacity-75">{selected.description}</p>

          <a
            className="font-semibold mt-2 cursor-pointer hover:text-itzy-500 transition duration-300 ease-in-out"
            onClick={() => navigate(`/message-book/${selected.id}`)}
          >
            상세정보✨
          </a>
        </div>

        {/* 프로그레스바 */}
        <div className="absolute w-full h-0.5 bottom-0 left-0 bg-slate-50 z-10"></div>
        <div ref={progressBarRef} className="absolute w-0 h-0.5 bottom-0 left-0 bg-itzy-500 z-20 fill-animation"></div>

        {/* 백그라운드 오버레이 */}
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/10"></div>
      </section>

      {/* 리스트 */}
      <div className="w-full mt-auto pt-2">
        <span className="px-7 text-xl font-semibold">메시지북</span>

        <div ref={carouselRef} className="flex gap-4 p-6 overflow-x-scroll scrollbar-hide">
          {messageBooks.map((messageBook: MessageBook) => (
            <img
              key={messageBook.id}
              id={String(messageBook.id)}
              src={getCoverURL(messageBook.path)}
              alt={messageBook.title}
              className={`max-w-52 aspect-[179/264] object-cover rounded-lg drop-shadow-xl hover:cursor-pointer transition ${
                selected.id === messageBook.id ? "-translate-y-3 scale-105" : "hover:-translate-y-2"
              }`}
              onClick={() => select(messageBook)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MessageBookPage;
