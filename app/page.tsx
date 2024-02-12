import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-zinc-900 via-zinc-600/20 to-zinc-900">
      <nav className="animate-fade-in my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-zinc-400 duration-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-slate-200 bg-clip-text text-4xl text-transparent duration-1000 sm:text-4xl md:text-7xl ">
        Hi! I'm Ivan
      </h1>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-200/0 md:block" />
      <div className="animate-fade-in my-16 text-center">
        <h2 className="text-md max-w-screen-sm text-zinc-300">
          I'm an antidisciplinary cognitive scientist, artist, and technologist.
          I'm building the future of mental health care at{" "}
          <Link
            target="_blank"
            href="https://monoql.io"
            className="underline duration-500 hover:text-zinc-100"
          >
            monoql.io
          </Link>
          .
        </h2>
      </div>
    </div>
  );
}
