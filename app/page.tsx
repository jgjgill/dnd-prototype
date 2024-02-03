import dynamic from "next/dynamic.js";

const Bubble = dynamic(() => import("./bubble.jsx"), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">나는 버블 컴포넌트</h2>
        <Bubble />
      </div>
    </main>
  );
}
