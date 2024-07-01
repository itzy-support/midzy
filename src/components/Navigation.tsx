import logo from "@/assets/logo.webp";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full h-12 z-[9999] px-6 flex items-center">
      <button onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="h-8" />
      </button>

      <div className="flex gap-4 relative ml-5">
        <button className="w-20 text-white text-center" onClick={() => navigate("/")}>
          NEW
        </button>
        <button className="w-20 text-white text-center" onClick={() => navigate("/message-book")}>
          메시지북
        </button>
        <button className="w-20 text-white text-center" onClick={() => navigate("/")}>
          서포트
        </button>

        <div className="absolute -bottom-1 mx-8 w-4 h-1 bg-itzy-500 rounded-full" />
      </div>
    </header>
  );
};

export default Navigation;
