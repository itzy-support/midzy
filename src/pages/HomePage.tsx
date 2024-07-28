import { MessageBook } from "@/types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const messageBooks: MessageBook[] = useLoaderData() as MessageBook[];

  const [page, setPage] = useState<number>(0);
  const [scrollCounter, setScrollCounter] = useState<number>(0);

  const maxPage = messageBooks.length - 1;

  useEffect(() => {
    const movePage = (step: number) => {
      let newPage = page + step;
      if (newPage < 0) newPage = maxPage;
      if (newPage > maxPage) newPage = 0;

      setPage(newPage);
      setScrollCounter(0);
    };

    const handleWheel = ({ deltaY }: WheelEvent) => {
      if (deltaY > 0) {
        setScrollCounter(scrollCounter + 10);
        if (scrollCounter === 100) movePage(1);
      } else {
        setScrollCounter(scrollCounter - 10);
        if (scrollCounter === -100) movePage(-1);
      }
    };

    const timer = setTimeout(() => {
      if (scrollCounter === 0 || scrollCounter === 100) return;

      if (scrollCounter > 30) {
        movePage(1);
      } else if (scrollCounter < -30) {
        movePage(-1);
      } else {
        setScrollCounter(0);
      }
    }, 400);

    window.addEventListener("wheel", handleWheel);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollCounter, page, maxPage]);

  const nextPage = () => {
    if (page === maxPage) return 0;
    return page + 1;
  };

  const prevPage = () => {
    if (page === 0) return maxPage;
    return page - 1;
  };

  const height = (index: number) => {
    if (index === page && scrollCounter > 0) return `${100 - scrollCounter}%`;
    if (index === prevPage() && scrollCounter < 0) return `${0 - scrollCounter}%`;
    if (index >= page && index !== prevPage()) return "100%";
    return "0%";
  };

  const visible = (index: number) => {
    if (scrollCounter > 0) {
      if (index === page || index === nextPage()) return "visible";
    } else if (scrollCounter < 0) {
      if (index === page || index === prevPage()) return "visible";
    } else {
      if (index === page) return "visible";
    }

    return "invisible";
  };

  const zIndex = (index: number) => {
    if (index === prevPage()) return "z-10";
    if (index === nextPage()) return "-z-10";
    return "z-0";
  };

  const visibleFooter = (index: number) => {
    if (scrollCounter <= 0 && index === page) return "visible";
    if (scrollCounter > 0 && index === nextPage()) return "visible";
    return "invisible";
  };

  return (
    <main className="h-screen overflow-hidden scrollbar-hide relative">
      {messageBooks.map(({ id, textColor, bgColor }, index) => (
        <div
          key={id}
          className={`w-screen absolute flex transition-all duration-300 ease-in-out ${visible(index)} ${zIndex(
            index
          )}`}
          style={{ height: height(index), backgroundColor: bgColor, color: textColor }}
        >
          <div
            className={`${visibleFooter(
              index
            )} fixed bottom-0 w-full flex justify-between py-4 px-6 text-sm font-semibold`}
          >
            <span>2024.07.08</span>

            <span>
              {index + 1}/{maxPage + 1}
            </span>
          </div>
        </div>
      ))}
    </main>
  );
};

export default HomePage;
