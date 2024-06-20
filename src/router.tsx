import { RouteObject, createBrowserRouter } from "react-router-dom";
import MessageBook from "@/pages/MessageBook";
import supportData from "@/data/supports.json";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MessageBook />,
    loader: () => supportData,
  },
];

const router = createBrowserRouter(routes);

export default router;
