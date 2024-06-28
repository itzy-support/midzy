import { RouterProvider } from "react-router-dom";
import router from "@/router";
import AppHeader from "@/components/AppHeader";

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
