import logo from "@/assets/logo.webp";
import { ReactNode, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  path: string;
}

const NavButton: FC<ButtonProps> = ({ children, path }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <button
      className="relative text-sm text-white hover:text-itzy-500 transition duration-300 ease-in-out text-center"
      onClick={() => navigate(path)}
    >
      {children}
      <Pointer show={path === pathname} />
    </button>
  );
};

interface PointerProps {
  show: boolean;
}

const Pointer: FC<PointerProps> = ({ show }) => (
  <div className="absolute -bottom-1 w-full flex justify-center">
    <div
      className={`h-1 bg-itzy-500 rounded-full transition-all duration-300 ease-out ${
        show ? "visible w-4" : "invisible w-0"
      }`}
    />
  </div>
);

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full h-14 z-[9999] px-6 flex justify-between items-center">
      <div className="w-28 flex justify-start">
        <NavButton path="/">SUPPORT</NavButton>
      </div>

      <button onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="h-8" />
      </button>

      <div className="w-28 flex justify-end">
        <NavButton path="/message-book">MESSAGE BOOK</NavButton>
      </div>
    </header>
  );
};

export default Navigation;
