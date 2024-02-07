"use client";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./stack";
import Bubble from "./bubble";

const Mbti: ActivityComponentType = () => {
  const { push } = useFlow();

  const handleBubbleClick = (value: string) => {
    alert(`${value}를 선택했습니다!`);
    push("MbtiResult", { mbti: value });
  };

  return (
    <AppScreen appBar={{ title: "팀원 성향 파악하기" }}>
      <Bubble handleClick={handleBubbleClick} />
    </AppScreen>
  );
};

export default Mbti;
