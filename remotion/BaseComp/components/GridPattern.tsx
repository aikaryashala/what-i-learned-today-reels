import { AbsoluteFill, useVideoConfig } from "remotion";
import GridPatternSvg from "../assets/GridPatternSvg";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

export default function GridPattern({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) {
  const { width, height } = useVideoConfig();
  return (
    <AbsoluteFill
      {...props}
      className={cn("items-center justify-center", props.className)}
    >
      {children}
      <GridPatternSvg className="absolute inset-0" videoWidth={width} videoHeight={height} />
    </AbsoluteFill>
  );
}
