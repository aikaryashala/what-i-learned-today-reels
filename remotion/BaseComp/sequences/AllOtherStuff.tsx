import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import ScrollingTextList from "../components/ScrollingTextList";
import {ScrollTextTitle} from "../../../script/VideoContent";

export default function AllThingsWeAddedSequence({ list }: { list: string[] }) {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="text-5xl text-center items-center justify-center font-black bg-black text-white flex gap-10 !flex-col px-16">
      <Sequence from={fps * 0.5} className="!relative w-full flex-1">
        <ScrollingTextList list={list} title={ScrollTextTitle} />
      </Sequence>
    </AbsoluteFill>
  );
}
