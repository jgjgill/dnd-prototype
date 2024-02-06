import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import Image from "next/image";
import MbtiResultImage from "@/images/mbti-result.png";

type MbtiResultParams = {
  mbti: string;
};

const MbtiResult: ActivityComponentType<MbtiResultParams> = ({ params }) => {
  return (
    <AppScreen appBar={{ title: "팀원 성향 파악하기" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <Image src={MbtiResultImage} alt="Mbti 결과" />
        <div>{params.mbti}</div>
      </div>
    </AppScreen>
  );
};

export default MbtiResult;
