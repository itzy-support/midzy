import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridContainer: React.FC<Props> = ({ children }) => {
  return <div className="grid grid-cols-12 gap-4">{children}</div>;
};

export default GridContainer;
