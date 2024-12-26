import React from 'react';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = () => {
  return (
    <section className="flex flex-col items-center">
      <h1
        className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-pink-500 glow-text animate-gradient"
        data-aos="fade-right"
      >
        ORBIT
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400 ">
        Your AI Companion for Effortless DeFi
      </h2>
      <p className="text-lg md:text-xl text-purple-300/90  max-w-2xl text-center">
        Effortless, automated, and intuitive—Orbit transforms how you interacts
        with DeFi.
      </p>
      <Link
        href="./asd"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-[var(--second-text)] font-semibold p-2 rounded-2xl"
      >
        EXPLORE
      </Link>
    </section>
  );
};
