/// <reference types="vitest" />

import type { UserConfig } from "vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const sharedConfig: UserConfig = {
		plugins: [react()],
	};

	if (command === "serve") { // 👈 dev env
		return {
			...sharedConfig,
			base: "/",
		}
	} else { // 👈 prod env
		command satisfies "build"
		return {
			...sharedConfig,
			base: "/my-home-android/",
		}
	}
})
