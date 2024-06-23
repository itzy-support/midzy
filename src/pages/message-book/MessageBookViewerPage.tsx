import { MessageBook } from "@/types";
import { getMessageBookURL } from "@/utils";
import { useLoaderData } from "react-router-dom";

const MessageBookViewr: React.FC = () => {
  const messageBook: MessageBook = useLoaderData() as MessageBook;
  const { pages, path } = messageBook;

  // const openDriveLink = (): void => {
  //   open(getDriveURL(pdf));
  // };

  /* <button onClick={openDriveLink}>다운</button> */

  return (
    <main className="container mx-auto p-4 grid grid-cols-2 gap-1.5">
      {[...Array(pages)].map((_, index) => (
        <img src={getMessageBookURL(path, index + 1)} className="col-span-2 xl:col-span-1" />
      ))}
    </main>
  );
};

export default MessageBookViewr;
