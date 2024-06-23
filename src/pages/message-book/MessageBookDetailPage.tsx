import { MessageBook } from "@/types";
import { getCoverURL, getPhotoURL } from "@/utils";
import { useLoaderData, useNavigate } from "react-router-dom";

const MessageBookDetailPage: React.FC = () => {
  const messageBook: MessageBook = useLoaderData() as MessageBook;
  const { id, title, description, contents, path, photos } = messageBook;

  const navigate = useNavigate();
  const goViewer = (id: number): void => {
    navigate(`/message-book/viewer/${id}`);
  };

  return (
    <main className="container mx-auto p-4 flex flex-col gap-4">
      <section className="grid grid-cols-3 gap-8 bg-white p-6 rounded-xl shadow-lg">
        {/* 이미지 */}
        <div className="col-span-3 sm:col-span-1 flex justify-center">
          <img
            src={getCoverURL(path)}
            alt={title}
            className="aspect-[148/210] object-cover w-full max-w-60 rounded-xl drop-shadow-md"
          />
        </div>

        {/* 정보 */}
        <div className="col-span-3 sm:col-span-2 flex flex-col gap-4">
          <div>
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="mt-1">{description}</p>
          </div>

          {contents && (
            <div>
              {contents.map(({ entry }, index) => (
                <p key={entry} className="text-sm opacity-55">{`${index + 1}. ${entry}`}</p>
              ))}
            </div>
          )}

          <button
            className="w-fit text-itzy-500 hover:text-itzy-200 transition duration-300 ease-in-out"
            onClick={() => goViewer(id)}
          >
            읽어보기 📖
          </button>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <span className="text-xl font-semibold">📷실물사진</span>

        {/* 사진 */}
        <div className="grid grid-cols-12 gap-1.5 mt-2">
          {photos.map((photo) => (
            <img
              key={photo}
              src={getPhotoURL(path, photo)}
              alt={title}
              className="rounded-md aspect-square object-cover col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MessageBookDetailPage;
