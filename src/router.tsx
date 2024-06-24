import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MessageBook } from "@/types";
import messageBooks from "@/data/message-books.json";
import MessageBookPage from "@/pages/message-book/MessageBookPage";
import MessageBookDetailPage from "@/pages/message-book/MessageBookDetailPage";
import MessageBookViewrPage from "@/pages/message-book/MessageBookViewerPage";
import HomePage from "@/pages/HomePage";

const messageBookData: MessageBook[] = messageBooks as MessageBook[];

const routes: RouteObject[] = [
  {
    path: "/message-book",
    children: [
      {
        index: true,
        element: <MessageBookPage />,
        loader: (): MessageBook[] => messageBookData,
      },
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
  {
    path: "/",
    element: <HomePage />,
  },
];

const getMessageBookById = (id: number): MessageBook => messageBookData.find((el) => el.id === id) as MessageBook;

const router = createBrowserRouter(routes);

export default router;
