"use client";

import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./stack";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSearchParams } from "next/navigation";
import Search from "./search";
const Start: ActivityComponentType = () => {
  const [socket, setSocket] = useState<any>();
  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState(
    useSearchParams().get("query") ?? ""
  );
  const [inbox, setInbox] = useState<any>([]);

  const { push } = useFlow();

  const onClick = () => {
    push("Mbti", { title: "hello" });
  };

  const onSendMessage = () => {
    socket.emit("message", message, roomName);
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("message", (message) => {
      setInbox((prev: any) => [...prev, message]);
    });

    setSocket(socket);
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.emit("joinRoom", roomName);
  }, [roomName, socket]);

  return (
    <AppScreen appBar={{ title: "게임 선택" }}>
      <button onClick={onClick}>MBTI 하러 가기</button>

      <input
        type="text"
        placeholder="test"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={onSendMessage}>테스트</button>

      {inbox.map((message: string, key: number) => (
        <div key={key}>{message}</div>
      ))}

      <div className="flex gap-3 flex-col">
        <h2>초대 코드를 공유합니다.</h2>
        <button
          onClick={async () => {
            const link = window.location.href;
            await navigator.clipboard.writeText(link);
            window.alert("클립보드에 링크 복사");
          }}
        >
          코드 공유
        </button>
      </div>

      <div className="flex gap-3 flex-col">
        <h2>초대 코드 입력해서 방에 입장합니다.</h2>
        <Search placeholder="코드" />

        <button
          onClick={() => {
            socket.emit("joinRoom", roomName);
          }}
        >
          코드 입력하기
        </button>
      </div>
    </AppScreen>
  );
};

export default Start;
