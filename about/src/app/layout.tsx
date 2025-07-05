import type { Metadata } from "next"
import { Geist, Geist_Mono, Imbue } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const imbue = Imbue({
	variable: "--font-imbue",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Nicole Blanchette - Web Developer",
  description: "Full-Stack Web Developer specializing in the MERN/PERN tech stacks. Developing quality code through design, QA, and accessibility solutions",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
    <html lang='en' className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${imbue.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
