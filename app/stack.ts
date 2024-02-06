"use client";

import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import Mbti from "./mbti";
import Start from "./start";
import MbtiResult from "./mbti-result";

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  activities: { Start, Mbti, MbtiResult },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({ theme: "cupertino" }),
    () => {
      return { key: "jgjgill-plugin" };
    },
  ],
  initialActivity: () => "Start",
});
