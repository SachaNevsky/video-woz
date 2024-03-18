import { Inter } from "next/font/google";
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Video WOZ",
	description: "Page to host some Wizard of Oz ideas for accessible interventions.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="grid grid-cols-9 gap-2 bg-black text-white text-center h-[4vh]">
					<a href="/" className="hover:bg-gray-900 p-1 col-start-2">Step Control</a>
					<a href="/automated" className="hover:bg-gray-900 p-1">Automated Pauses</a>
					<a href="/slowed" className="hover:bg-gray-900 p-1">Slow Down</a>
					<a href="/background" className="hover:bg-gray-900 p-1">Background Noise</a>
					<a href="/highlight" className="hover:bg-gray-900 p-1">Highlight</a>
					<a href="/simplified" className="hover:bg-gray-900 p-1">Simplified</a>
					<a href="/complex_marker" className="hover:bg-gray-900 p-1">Complexity Marker</a>
				</div>
				<main className={inter.className}>{children}</main>
			</body>
		</html>
	);
}
