// ex. scripts/build_npm.ts
import { build, emptyDir } from "@deno/dnt";

const OUTPUT_DIR = "./.npm";
const OUTPUT_LICENSE = OUTPUT_DIR + "/LICENSE";
const OUTPUT_README = OUTPUT_DIR + "/README.md";
const PACKAGE_NAME = "@echristian/env";
const VERSION = "0.0.2";

await emptyDir(OUTPUT_DIR);

await build({
  packageManager: "pnpm",
  entryPoints: [
    {
      name: ".",
      path: "./src/main.ts",
    },
  ],
  outDir: OUTPUT_DIR,
  shims: {},
  typeCheck: false,
  scriptModule: false,
  test: false,
  package: {
    name: PACKAGE_NAME,
    version: VERSION,
    description:
      "Small, cross runtime utility function to get environment variables.",
    license: "MPL-2.0",
    repository: {
      type: "git",
      url: "git+https://github.com/ericc-ch/env.git",
    },
    bugs: {
      url: "https://github.com/ericc-ch/env/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", OUTPUT_LICENSE);
    Deno.copyFileSync("README.md", OUTPUT_README);
  },
});
