"use client";

import { ActivityComponentType, useActivity, useStack } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./stack";

const Start: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push("Mbti", { title: "hello" });
  };

  return (
    <AppScreen appBar={{ title: "게임 선택" }}>
      <button onClick={onClick}>MBTI 하러 가기</button>
    </AppScreen>
  );
};

export default Start;
