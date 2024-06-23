import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MessageBook } from "@/types";
import messageBooks from "@/data/message-books.json";
import MessageBookPage from "@/pages/message-book/MessageBookPage";
import MessageBookDetailPage from "@/pages/message-book/MessageBookDetailPage";
import MessageBookViewrPage from "@/pages/message-book/MessageBookViewerPage";

const messageBookData: MessageBook[] = messageBooks as MessageBook[];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MessageBookPage />,
    loader: (): MessageBook[] => messageBookData,
  },
  {
    path: "/message-book",
    children: [
      {
        path: ":id",
        element: <MessageBookDetailPage />,
        loader: ({ params: { id } }) => getMessageBookById(Number(id)),
      },
      {
        path: "viewer/:id",
        element: <MessageBookViewrPage />,
        loader: ({ params: { id } }) => getMessageBookById(Number(id)),
      },
    ],
  },
];

const getMessageBookById = (id: number): MessageBook => messageBookData.find((el) => el.id === id) as MessageBook;

const router = createBrowserRouter(routes);

export default router;
