import { FC } from "react";

interface Props {
  visible: string;
  page: number;
  maxPage: number;
  date: string;
}
const SupportItemFooter: FC<Props> = ({ visible, page, maxPage, date }) => {
  return (
    <div className={`${visible} fixed bottom-0 w-full flex justify-between py-4 px-6 text-sm font-semibold`}>
      <span>{date}</span>

      <span>
        {page}/{maxPage}
      </span>
    </div>
  );
};

export default SupportItemFooter;
