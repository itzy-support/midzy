import { RouteObject, createBrowserRouter } from "react-router-dom";
import MessageBookPage from "@/pages/MessageBookPage";
import messageBookData from "@/data/message-books.json";
import MessageBookDetailPage from "@/pages/MessageBookDetailPage";
import { MessageBook } from "@/types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MessageBookPage />,
    loader: () => messageBookData as MessageBook[],
  },
  {
    path: "/messagebook",
    children: [
      {
        path: ":id",
        element: <MessageBookDetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
