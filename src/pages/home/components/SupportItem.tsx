import { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  visible: string;
  clip: number;
  textColor: string;
  bgColor: string;
  zIndex: string;
}

const SupportItem: FC<Props> = ({ children, visible, clip, textColor, bgColor, zIndex }) => {
  const [clipPath, setClipPath] = useState<number>(clip > 0 ? (100 / 6) * clip : (100 / 6) * clip + 100);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setClipPath()
  //   }, 10)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [clip])

  return (
    <div
      className={`w-screen h-screen absolute flex ${visible} ${zIndex}`}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        clipPath: `inset(0 0 ${clipPath}%)`,
      }}
    >
      {children}
    </div>
  );
};

export default SupportItem;
