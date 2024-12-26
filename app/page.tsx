// import Image from 'next/image';

import { Hero } from './Hero';

export default function Home() {
  return (
    <div className="bg-black w-screen h-full">
      <header></header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
