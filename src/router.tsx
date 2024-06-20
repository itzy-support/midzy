import { RouteObject, createBrowserRouter } from "react-router-dom";
import MessageBook from "@/pages/MessageBook";
import supportData from "@/data/supports.json";
import MessageBookDetail from "@/pages/MessageBookDetail";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MessageBook />,
    loader: () => supportData,
  },
  {
    path: "/messagebook",
    children: [
      {
        path: ":id",
        element: <MessageBookDetail />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
