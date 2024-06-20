import { MessageBook } from "@/types";
import { getThumbnailURL } from "@/utils";
import { useLocation } from "react-router-dom";

const MessageBookDetailPage: React.FC = () => {
  const location = useLocation();
  const { title, description, cover } = location.state as MessageBook;

  return (
    <main className="container mx-auto p-4 flex flex-col gap-4">
      <section className="grid grid-cols-3 gap-8 bg-white p-4 rounded-xl shadow-lg">
        {/* 이미지 */}
        <div className="col-span-3 sm:col-span-1 flex justify-center">
          <img
            src={getThumbnailURL(cover)}
            alt={title}
            className="aspect-[148/210] object-cover w-full max-w-60 rounded-xl drop-shadow-md"
          />
        </div>

        {/* 정보 */}
        <div className="col-span-3 sm:col-span-2 flex flex-col gap-1">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p>{description}</p>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default MessageBookDetailPage;
