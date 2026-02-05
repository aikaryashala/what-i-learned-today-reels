import { HTMLAttributes } from "react";
import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { z } from "zod";
import First from "./sequences/SlideInContentFromBottomWithGrid";
import { loadFont as loadInterFont } from "@remotion/google-fonts/Inter";
import SlidingDoors from "./components/SlidingDoors";
import TextFadeInFromBottom from "./components/TextFadeInFromBottom";
import GridPattern from "./components/GridPattern";
import FadeOutExit from "./components/FadeOutExit";
import Star6Sided from "./assets/Star6Sided";
import Star4Sided from "./assets/Star4Sided";
import clsx from "clsx" ;
import ConditionalWrap from "./components/ConditionalWrap";
import SlideExitToTop from "./components/SlideExitToTop";
import FadingOutAudio from "./sequences/FadingOutAudio";
import {IntroTitle, IntroCaption, Introduction, EndingTitle, EndingCaption} from "../../script/VideoContent" ;
const parsedPropsSchemaBase = {
  topicsLearned: z.array(z.object({ title: z.string(), description: z.string() })),
};
const parsedPropsSchema = z.object(parsedPropsSchemaBase);
export type ParsedPropsSchema = z.infer<typeof parsedPropsSchema>;

export const aikVideoCompSchema = z.object({
  repositorySlug: z.string(),
  releaseTag: z.string(),
  Content: z.string(),

  ...parsedPropsSchemaBase,
});
export type AIKVideoCompProps = z.infer<typeof aikVideoCompSchema>;

loadInterFont("normal", {
  weights: ["400", "500", "600", "700", "800", "900"],
});

const colorSetClasses = [
  ["text-white", "bg-sky-500"],
  ["text-white", "bg-teal-600"],
  ["text-white", "bg-indigo-500"],
  ["text-white", "bg-blue-500"],
  ["text-white", "bg-purple-600"],
  ["text-white", "bg-fuchsia-600"],
] satisfies [string, string][];

const AIKVideoComp = ({
  topicsLearned,
}: z.infer<typeof aikVideoCompSchema> & HTMLAttributes<HTMLDivElement>) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-black">
      {/* Audio */}
      <FadingOutAudio />

      {/* Video */}
      <Series>
        <Series.Sequence
          durationInFrames={fps * 1.5}
          className="text-white"
          name={"AIK: Intro Title"}
        > {/* name is not used */}
          <SlidingDoors>
            <First className="bg-black text-center">
              <h1 className="text-9xl font-black">{IntroTitle}</h1>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 1.5}
          offset={-20}
          className="text-white"
          name={"AIK: Intro Caption"}
        > {/* name is not used */}
          <SlidingDoors>
            <First className="bg-blue-500 text-center">
              <h1 className="text-9xl font-black">{IntroCaption}</h1>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 3}
          offset={-20}
          className="text-black"
          name={"AIK: Intro Title and Caption"}
        >     {/* name is not used */ }
          <SlidingDoors>
            <First className="bg-white text-center">
              <div className="flex items-center justify-center gap-10 flex-col">
                <h1 className="text-9xl font-black">{IntroTitle}</h1>
                <h1 className="text-5xl font-bold">{IntroCaption}</h1>
              </div>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 3}
          offset={-20}
          className="text-white"
          name={"AIK: Topics Learned Introduction"}
        > {/* name is not used */}
          <SlidingDoors>
            <First className="bg-black text-center">
              <Star6Sided />
              <Star4Sided />
              <h1 className="text-9xl font-black">
                {Introduction}
              </h1>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        {topicsLearned.map((change, i) => (
          <Series.Sequence
            durationInFrames={fps * 4}
            offset={-20}
            key={i}
            className={clsx(
              colorSetClasses[i % colorSetClasses.length][0],
              "z-20"
            )}
            name={`AIK: Topics Learned - ${i + 1}`}
          >
            <ConditionalWrap
              condition={
                // Last one only
                i === topicsLearned.length - 1
              }
              wrap={(children) => <SlideExitToTop>{children}</SlideExitToTop>}
            >
              <SlidingDoors>
                <GridPattern
                  className={clsx(
                    colorSetClasses[i % colorSetClasses.length][1],
                    "text-center"
                  )}
                >
                  <Series>
                    <Series.Sequence durationInFrames={fps * 4}>
                      <TextFadeInFromBottom>
                        <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                          <h1 className="text-9xl font-black leading-[100%]">
                            {i + 1}
                          </h1>
                        </div>
                      </TextFadeInFromBottom>
                    </Series.Sequence>
                    <Series.Sequence
                      durationInFrames={fps * 3}
                      offset={-fps * 3}
                    >
                      <TextFadeInFromBottom
                        noExit
                        className="gap-10 flex flex-col items-center -mb-20"
                      >
                        <h1 className="text-[120px] font-black leading-tight">{change.title}</h1>
                        <p className="text-[45px] font-medium opacity-60 leading-normal w-3/4">
                          {change.description}
                        </p>
                      </TextFadeInFromBottom>
                    </Series.Sequence>
                  </Series>
                </GridPattern>
              </SlidingDoors>
            </ConditionalWrap>
          </Series.Sequence>
        ))}

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-black"
          name={"AIK: Ending Title and Caption"}
        > {/* name is not used */}
          <FadeOutExit>
            <SlidingDoors>
              <First className="bg-white text-center">
                <div className="flex items-center justify-center gap-10 flex-col">
                  <h1 className="text-9xl font-black">{EndingTitle}</h1>
                  <h1 className="text-5xl font-bold">{EndingCaption}</h1>
                </div>
              </First>
            </SlidingDoors>
          </FadeOutExit>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

export default AIKVideoComp;
