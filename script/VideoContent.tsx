import { staticFile } from "remotion";
import content from "./content.json";

// Video format configuration
export type VideoFormat = "landscape" | "instagram" | "reels";
export const videoFormat: VideoFormat = content.videoFormat || "reels";

// Text content - read from JSON
export const IntroTitle = content.introTitle;
export const IntroCaption = content.introCaption;
export const Introduction = content.introduction;
export const ScrollTextTitle = content.scrollTextTitle;
export const Conclusion = content.conclusion;
export const ConclusionCaption = content.conclusionCaption;
export const EndingTitle = content.endingTitle;
export const EndingCaption = content.endingCaption;

// Audio - uses staticFile for local files in public/
export const BackgroundMusic = staticFile(content.backgroundMusic);

// Structured content for video sequences
export const topChanges = content.topChanges;

// For backward compatibility with Root.tsx YAML parsing
const Content = `topChanges:
${content.topChanges.map(c => `- title: ${c.title}\n  description: ${c.description}`).join('\n')}`;

export default Content;
