import { MessageBook } from "@/types";
import { getDriveURL } from "@/utils";
import { useLoaderData } from "react-router-dom";

const MessageBookViewr: React.FC = () => {
  const messageBook: MessageBook = useLoaderData() as MessageBook;
  const { pdf } = messageBook;

  const openDriveLink = (): void => {
    open(getDriveURL(pdf));
  };

  return (
    <main className="container mx-auto p-4 flex flex-col gap-4">
      <button onClick={openDriveLink}>다운</button>
    </main>
  );
};

export default MessageBookViewr;
