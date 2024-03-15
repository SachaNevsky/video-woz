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
				<div className="grid grid-cols-10 gap-2 bg-black text-white text-center h-[4vh]">
					<a href="/automated" className="col-start-4 hover:bg-gray-900 p-1">Automated Pauses</a>
					<a href="/" className="hover:bg-gray-900 p-1">Step Control</a>
					<a href="/background" className="hover:bg-gray-900 p-1">Background Noise</a>
					<a href="/highlight" className="hover:bg-gray-900 p-1">Highlight</a>
				</div>
				<main className={inter.className}>{children}</main>
			</body>
		</html>
	);
}
