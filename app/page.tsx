import { log } from 'console';
import Image from 'next/image';

export default function Home() {
  console.log('What am i doing? -- Server / Client');

  return <h1 className="text-3xl">Welcome to Next.js 15</h1>;
}
