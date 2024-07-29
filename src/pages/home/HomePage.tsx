import SupportItem from "@/pages/home/components/SupportItem";
import SupportItemFooter from "@/pages/home/components/SupportItemFooter";
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
    };

    const handleWheel = ({ deltaY }: WheelEvent) => {
      if (deltaY > 0) {
        setScrollCounter(scrollCounter + 1);
        if (scrollCounter === 6) {
          movePage(1);
          setScrollCounter(0);
        }
      } else {
        setScrollCounter(scrollCounter - 1);
        if (scrollCounter === -6) {
          movePage(-1);
          setScrollCounter(0);
        }
      }
    };

    const timer = setTimeout(() => {
      if (scrollCounter === 0) return;

      if (scrollCounter > 3) {
        movePage(1);
      } else if (scrollCounter < -3) {
        movePage(-1);
      }
      setScrollCounter(0);
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

  const clip = (index: number) => {
    if (index === page && scrollCounter > 0) return scrollCounter;
    if (index === prevPage() && scrollCounter < 0) return 6 + scrollCounter;
    if (index !== prevPage()) return 0;
    return 6;
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

  const pagePosition = (index: number) => {
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
      {messageBooks.map(({ id, date, textColor, bgColor }, index) => (
        <SupportItem
          key={id}
          visible={visible(index)}
          clip={clip(index)}
          textColor={textColor}
          bgColor={bgColor}
          zIndex={pagePosition(index)}
        >
          <SupportItemFooter visible={visibleFooter(index)} page={index + 1} maxPage={maxPage + 1} date={date} />
        </SupportItem>
      ))}
    </main>
  );
};

export default HomePage;
