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

const column1 = [
  "Artificial Intelligent Systems",
  "Human Computer Interfaces",
  "Cognitive Robotics",
];
const column2 = [
  "Distributed Systems",
  "Bio-Digital Technologies",
  "Cognitive Augmentation",
];

export default function AboutPage() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="flex h-screen min-h-screen w-full items-center justify-center">
        <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4">
          <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-zinc-300 bg-clip-text text-4xl text-transparent duration-1000 sm:text-4xl md:text-7xl ">
            Hi! I'm Ivan
          </h1>
          <br />
          <p className="animate-fade-in mt-4 text-zinc-300 ">
            I’m an antidisciplinary cognitive scientist, artist, and
            technologist with a passion for building the world around me. Above
            all, I believe in pursuing the elegant integration of technology in
            our everyday actions and interactions. My dream is to dismantle the
            barriers between technology and the human experience through
            thoughtfully designed agent systems and novel computing
            environments.
            <br />
            <br />
            My research and interests lie at the intersection of artificial
            intelligence, bio-digital technologies, robotics, distributed
            systems, and cognitive science. I am deeply invested in designing
            the future of how we live, work, and play.
            <br />
            <br />I am a guitarist and synthesist and combine the two mediums to
            generate unique sounds, ambients, and textures. I love building
            audio-visual performance installations in my free time and build
            generative audio-visual performance tools for artists and musicians.
          </p>
          <div className="animate-fade-in container my-16 flex-col text-center">
            <h3 className="text-2xl text-zinc-200">Research Interests</h3>
            {/* <div className="my-3 flex h-px w-auto justify-center bg-zinc-600" /> */}
            <div className="my-3 flex w-auto h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 " />
            <div className="flex justify-center">
              <div className="mx-6 flex flex-col">
                <ul className=" text-zinc-300">
                  {column1.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="mx-6 flex flex-col">
                <ul className=" text-zinc-300">
                  {column2.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
