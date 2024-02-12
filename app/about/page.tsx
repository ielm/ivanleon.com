"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/__ielm__",
		label: "Twitter",
		handle: "@__ielm__",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:ivan@monoql.io",
		label: "Email",
		handle: "ivan@monoql.io",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/ielm",
		label: "Github",
		handle: "ielm",
	},
];

export default function AboutPage() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

			<div className="w-full h-screen flex items-center justify-center min-h-screen">

				<div className="container flex flex-col items-center justify-center relative min-h-screen px-4 mx-auto">
					<h1 className="z-10 text-4xl text-transparent duration-1000 bg-zinc-400 cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-7xl whitespace-nowrap bg-clip-text ">
						Hi! I'm Ivan
					</h1>
					<p className="mt-4 text-zinc-400">
						I’m an antidisciplinary cognitive scientist, artist, and technologist with a passion for building the world around me. Above all, I believe in pursuing the elegant integration of technology in our everyday actions and interactions. My dream is to dismantle the barriers between technology and the human experience through thoughtfully designed agent systems and novel computing environments.
						<br />
						<br />
						My research and interests lie at the intersection of artificial intelligence, bio-digital technologies, robotics, distributed systems, and cognitive science.  I am deeply invested in designing the future of how we live, work, and play. 
						<br />
						<br />
						I am a guitarist and synthesist and combine the two mediums to generate unique sounds, ambients, and textures. I love building audio-visual performance installations in my free time and build generative audio-visual performance tools for artists and musicians.
					</p>

				</div>
			</div>
		</div>
	);
}
