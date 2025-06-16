import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"],
      models: [
        {
          name: "Guide",
          type: "page",
          urlPath: "/guides/{slug}",
          filePath: "src/content/guides/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true }
          ]
        }
      ],
    }),
  ]
});
