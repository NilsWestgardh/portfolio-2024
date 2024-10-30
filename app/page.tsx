import React from "react";
// Utils
import dynamic from "next/dynamic";
// Components
const Gallery = dynamic(() => import("@/components/project/gallery"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      className="
        flex 
        flex-col 
        justify-start
        items-center 
         min-h-screen 
         max-w-[1024px]
         px-8
         lg:px-0
         w-full
        "
    >
      <Gallery />
    </div>
  );
}
