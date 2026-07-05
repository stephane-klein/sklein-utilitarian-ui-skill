import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig, presetTypography, presetWind4, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
    presets: [presetWind4(), presetTypography()],
    transformers: [transformerVariantGroup(), transformerDirectives()],
    extractors: [extractorSvelte()],
    shortcuts: {
        page: "max-w-4xl mx-auto",
    },
});
