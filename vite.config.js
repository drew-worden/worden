//IMPORTS
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

//VITE CONFIGURATION
const viteConfig = defineConfig({
	plugins: [sveltekit()]
})

//EXPORTS
export default viteConfig
