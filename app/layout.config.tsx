import React from "react"
import { type HomeLayoutProps } from "fumadocs-ui/home-layout"
import { Book, Box, Check } from "lucide-react"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
	githubUrl: "https://github.com/bryan308/ca-resources",
	nav: {
		title: (
			<>
				<Box />
				CA Resources
			</>
		),
	},
	links: [
		{
			type: "menu",
			text: "v1.5.0",
			items: [
				{
					icon: <Check />,
					text: "v1.5.0",
					url: "https://v2-ca-resources.vercel.app/",
					external: false,
				},
				{
					icon: <div className="size-4" />,
					text: "v1.2.6",
					url: "https://ca-resources.vercel.app/",
					external: false,
				},
			],
		},
		{
			icon: <Box />,
			text: "Resources",
			url: "/resources",
			active: "none",
		},
		{
			icon: <Book />,
			text: "Guides",
			url: "/guides",
			active: "none",
		},
	],
}
