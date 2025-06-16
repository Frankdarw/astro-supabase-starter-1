import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["Contenido"],
      models: [
        {
          name: "Guía",
          type: "page",
          urlPath: "/guías/{slug}",
          filePath: "Contenido/Guías/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
          ],
        },
      ],
    }),
  ]
});
