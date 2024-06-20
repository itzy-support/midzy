import { MessageBook } from "@/types";
import { useLoaderData } from "react-router-dom";

const MessageBookViewr: React.FC = () => {
  const messageBook: MessageBook = useLoaderData() as MessageBook;
  const { title } = messageBook;

  return <main className="container mx-auto p-4 flex flex-col gap-4">{title}</main>;
};

export default MessageBookViewr;
