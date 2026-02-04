# To make class summary videos

## Steps to first configure on dev machine

1. Install the needed packages
```
pnpm install
```

2. To generate the video
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
  "scrollTextTitle": "Section header for topics list",
  "conclusion": "Closing message",
  "conclusionCaption": "Closing subtitle",
  "endingTitle": "End screen title",
  "endingCaption": "End screen subtitle",

  "backgroundMusic": "your-audio.mp3",

  "topChanges": [
    { "title": "Topic 1", "description": "Description of topic 1" },
    { "title": "Topic 2", "description": "Description of topic 2" },
    { "title": "Topic 3", "description": "Description of topic 3" }
  ],

  "allChanges": [
    "List item 1",
    "List item 2",
    "List item 3"
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
| `allChanges` | Scrolling list of all items |
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



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
