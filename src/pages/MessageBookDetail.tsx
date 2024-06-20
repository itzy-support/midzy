import { Support } from "@/types";
import { useLocation } from "react-router-dom";

const MessageBookDetail: React.FC = () => {
  const location = useLocation();
  const { id, title, cover, description, photo } = location.state as Support;

  return (
    <div>
      {id}
      {title}
      {cover}
      {description}
      {photo}
    </div>
  );
};

export default MessageBookDetail;
