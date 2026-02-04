# To make "What I learned today reels"

## Steps to first configure on dev machine

1. Install the needed packages
```
pnpm install
```

2. To see preview the video
```
pnpm preview
```

3. To generate the video
```
pnpm render
```
You can see the video in the `out` folder.

## How to use:

Edit the `script/content.json` file to customize your video:

```json
{
  "introTitle": "Your Video Title",
  "introCaption": "Subtitle or Date",
  "introduction": "Introduction text",
  "conclusion": "Closing message",
  "conclusionCaption": "Closing subtitle",
  "endingTitle": "End screen title",
  "endingCaption": "End screen subtitle",

  "backgroundMusic": "your-audio.mp3",

  "topChanges": [
    { "title": "Topic 1", "description": "Description of topic 1" },
    { "title": "Topic 2", "description": "Description of topic 2" },
    { "title": "Topic 3", "description": "Description of topic 3" }
  ]
}
```

### Configuration details:

| Field | Description |
|-------|-------------|
| `videoFormat` | Video dimensions: `"landscape"`, `"instagram"`, or `"reels"` |
| `introTitle` | Main title shown at video start |
| `introCaption` | Subtitle shown below intro title |
| `introduction` | Text before main content |
| `topChanges` | Featured items (each gets its own animated slide) |
| `backgroundMusic` | Audio file name (place in `public/` folder) |
| `conclusion` | Closing message |
| `endingTitle` | Final screen title |

### Notes:
- Adding more items to `topChanges` automatically increases video length
- Place audio files in the `public/` folder
- Run `pnpm render` after editing to generate the video

### Supported Video Formats:

Set `videoFormat` in `content.json` to one of these values:

| Format | Value | Dimensions | Aspect Ratio | Use Case |
|--------|-------|------------|--------------|----------|
| Landscape HD | `"landscape"` | 2160×1080 | 2:1 | YouTube, presentations |
| Instagram Portrait | `"instagram"` | 1080×1350 | 4:5 | Instagram posts |
| Reels/Shorts | `"reels"` | 1080×1920 | 9:16 | Instagram Reels, YouTube Shorts, TikTok |

Example:
```json
{
  "videoFormat": "reels",
  ...
}
```

https://github.com/rohinibarla/Relano/assets/18045055/9d6a4fba-3dc2-4bf1-a49a-6a660b7ad165
