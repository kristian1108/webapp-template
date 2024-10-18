const { build } = require("esbuild");

build({
  entryPoints: ["src/app.js"],
  bundle: true,
  outfile: "public/bundle.js",
  loader: {
    '.js': 'jsx',
  },
});