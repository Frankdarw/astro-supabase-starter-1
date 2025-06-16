import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['Contenido/Guías'],
      models: [
        {
          name: 'Guía',
          type: 'page',
          label: 'Guías',
          urlPath: '/guia/{slug}',
          filePath: 'Contenido/Guías/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true, label: 'Título' },
            { name: 'excerpt', type: 'string', label: 'Resumen' },
            { name: 'body', type: 'markdown', label: 'Contenido' }
          ]
        }
      ]
    })
  ]
});
