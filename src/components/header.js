import Link from "next/link";
import { redressed } from "app/fonts";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-[clamp(1rem,5vw,2rem)] lg:px-[clamp(1rem,5vw,4rem)] border-b border-gray-200 border-none">
      <Link
        className={`text-[clamp(2.5rem,5vw,3rem)] ${redressed.className} font-semibold leading-none`}
        href="/"
      >
        Memewizy
      </Link>
      <Link
        href="/meme-generator"
        className="bg-blue-500 text-white font-semibold px-[clamp(.8rem,5vw,1rem)] py-[clamp(0.6rem,5vw,.8rem)] rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:ring focus:ring-blue-300"
      >
        Create Meme
      </Link>
    </header>
  );
}
