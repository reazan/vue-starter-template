import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Markdown from "unplugin-vue-markdown/vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		Markdown({}),
		Components({
			dts: "src/components.d.ts",
		}),
		AutoImport({
			imports: ["vue", "vue-router"],
			dirs: ["src/store"],
			dts: "src/auto-imports.d.ts",
		}),
	],
});
