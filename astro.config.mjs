import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  //projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: 'https://rchain.academy',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
  },
  renderers: [
    "@astrojs/renderer-svelte"
  ],
  vite: {
    build: {
    },
    
    define: {
      "global": {},
      'process.env': {},
    },
    plugins: [
    ],
    resolve: {
      alias: [
        {find: "@", replacement: path.resolve(__dirname, 'src')}
      ],
    },
  }
};
