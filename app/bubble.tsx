"use client";

/**
 * @description
 * react-bubble-ui 라이브러리는 타입을 제공하지 않습니다.
 * 이에 임시로 jsx 확장자명으로 컴포넌트를 구성합니다.
 */

import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import { mbtiCombinations } from "./mbti-data";

type Props = {
  handleClick: (value: string) => void;
};

export default function Bubble({ handleClick }: Props) {
  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: false,
    numCols: 5,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 10,
  };

  const onClick = (value: string) => {
    handleClick(value);
  };

  return (
    <BubbleUI options={options} className="w-full h-[600px] rounded-[50px]">
      {mbtiCombinations.map((data, i) => {
        return (
          <div
            key={i}
            onClick={() => onClick(data)}
            className="w-full h-full rounded-full flex items-center justify-center bg-[#3157DD] text-white font-semibold text-xl"
          >
            {data}
          </div>
        );
      })}
    </BubbleUI>
  );
}
