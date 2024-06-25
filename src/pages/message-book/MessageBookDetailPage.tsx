import { MessageBook } from "@/types";
import { getCoverURL, getDriveURL, getPhotoURL } from "@/utils";
import { faBook, faComment, faFilePdf, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TwitterShareButton, XIcon } from "react-share";

const MessageBookDetailPage = () => {
  const messageBook: MessageBook = useLoaderData() as MessageBook;
  const { id, title, description, date, contents, path, photos, pdf } = messageBook;

  const navigate = useNavigate();
  const goViewer = (id: number): void => {
    navigate(`/message-book/viewer/${id}`);
  };

  const openPdfWindow = (pdfId: string): void => {
    open(getDriveURL(pdfId));
  };

  const [viewImageIndex, setViewImageIndex] = useState<number>(0);

  return (
    <main className="container mx-auto p-4 flex flex-col gap-4">
      <section className="grid grid-cols-3 gap-8 bg-white p-6 rounded-xl shadow-lg">
        {/* 이미지 */}
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-3 justify-center items-center">
          <img
            src={getCoverURL(path)}
            alt={title}
            className="aspect-[179/264] object-cover w-full max-w-60 rounded-xl drop-shadow-md"
          />

          <div className="flex gap-3">
            {/* 카카오로 대체 */}
            <button className="bg-yellow-300 rounded-full w-6 h-6 flex justify-center items-center">
              <FontAwesomeIcon icon={faComment} size="sm" />
            </button>

            {/* X */}
            <TwitterShareButton url={location.href}>
              <XIcon size={24} round={true}></XIcon>
            </TwitterShareButton>

            {/* 링크 */}
            <button className="bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
              <FontAwesomeIcon icon={faLink} size="sm" />
            </button>
          </div>
        </div>

        {/* 정보 */}
        <div className="col-span-3 lg:col-span-2 flex flex-col gap-4">
          <div>
            <span className="text-xs opacity-55">{date}</span>
            <h2 className="text-4xl font-semibold my-1">{title}</h2>
            <p className="opacity-75">{description}</p>
          </div>

          {contents && (
            <>
              <div>
                {contents.map(({ entry }, index) => (
                  <p key={entry} className="text-sm opacity-55">{`${index + 1}. ${entry}`}</p>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <button
                  className="w-fit py-1 px-2.5 bg-itzy-500 text-white hover:text-itzy-200 rounded-full transition duration-300 ease-in-out"
                  onClick={() => goViewer(id)}
                >
                  <FontAwesomeIcon icon={faBook} className="opacity-90" />
                  <span className="ml-2">읽어보기</span>
                </button>

                {pdf && (
                  <button
                    className="w-fit hover:text-red-600 transition duration-300 ease-in-out"
                    onClick={() => openPdfWindow(pdf)}
                  >
                    <FontAwesomeIcon icon={faFilePdf} className="text-red-600 opacity-90" />
                    <span className="ml-1.5">다운로드</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg">
        <span className="text-xl font-semibold">📷 실물사진</span>

        {/* 사진 */}
        <div className="grid grid-cols-12 gap-1.5 mt-2">
          {[...Array(photos)].map((_, index) => (
            <img
              key={index}
              src={getPhotoURL(path, index)}
              className="rounded-md aspect-square object-cover col-span-4 md:col-span-3 xl:col-span-2 cursor-pointer transition hover:scale-[1.03]"
              onClick={() => setViewImageIndex(index)}
            />
          ))}
        </div>
      </section>

      <div>
        <img src={getPhotoURL(path, viewImageIndex)} className="rounded-md" />
      </div>
    </main>
  );
};

export default MessageBookDetailPage;
