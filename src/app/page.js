import Image from "next/image";
import Link from "next/link";
import memeGenerators from "data/memeGenerators";

export const metadata = {
  title: "Memewizy - Easy Meme Generator",
  description: "Easily create memes using our meme generator",
  alternates: {
    canonical: "https://memewizy.com",
  },
};

export default function Page() {
  return (
    <>
      <main className="px-[clamp(1rem,5vw,4rem)]">
        <div className="bg-sky-50 flex flex-col justify-center items-center text-center gap-5 py-[clamp(1rem,10vw,12rem)] px-[clamp(1rem,5vw,8rem)] rounded-xl">
          <h1 className="text-[clamp(2.5rem,5vw,3rem)] text-center font-black capitalize leading-tight">
            Best Free Easy Meme Generator
          </h1>
          <p className="text-center text-[clamp(1.2rem,5vw,1.3rem)] font-normal">
            Select a template, enter your caption and generate meme
          </p>
          <div className="flex justify-center flex-wrap gap-5">
            {memeGenerators.map((memeGenerator, index) => (
              <Image
                width={70}
                height={20}
                src={memeGenerator.img}
                alt={memeGenerator.title}
                key={index}
                className="cursor-pointer hover:border rounded-md"
              />
            ))}
          </div>
          <Link
            href="/meme-generator"
            className="mt-2 bg-blue-500 text-white font-semibold px-[clamp(.8rem,5vw,1rem)] py-[clamp(0.6rem,5vw,.8rem)] rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Start Creating
          </Link>
        </div>
      </main>
    </>
  );
}
