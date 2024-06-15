"use client"; // indicates Client Component
import { ReactNode } from "react";

// Import with next's dynamic import
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export const CursorExtension = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="256, 256, 256"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={7}
        outerStyle={{
          mixBlendMode: "exclusion",
          zIndex: 1000,
        }}
        innerStyle={{
          zIndex: 1000,
        }}
      />
      {children}
    </>
  );
};
