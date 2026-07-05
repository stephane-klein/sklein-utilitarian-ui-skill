import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from "@unocss/svelte-scoped/preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), UnoCSS({ configOrPath: "./uno.config.ts", exclude: ["./node_modules"] })],
    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: "index.html",
            precompress: false,
            strict: true,
        }),
    },
};

export default config;
