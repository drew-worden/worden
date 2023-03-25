//IMPORTS
import vercel from "@sveltejs/adapter-vercel"

//SVELTEKIT CONFIGURATION
const svelteKitConfig = {
	kit: {
		adapter: vercel()
	}
}

//EXPORTS
export default svelteKitConfig
