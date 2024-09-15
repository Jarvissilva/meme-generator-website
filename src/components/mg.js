import Editor from "components/editor";
import memeGenerators from "data/memeGenerators";
import Image from "next/image";
import Link from "next/link";
import { IoSettings } from "react-icons/io5";

export const metadata = {
  title: "Meme Generator - Memewizy",
  description:
    "Introducing our Meme Generator, the ultimate platform for unleashing your creativity and humor! 🚀Are you ready to turn ordinary moments into hilarious masterpieces?",
  alternates: {
    canonical: "https://memewizy.com/meme-generator",
  },
};

export default function Page() {
  return (
    <>
      <main className="px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.25rem,6vw,3rem)] lg:px-[clamp(6rem,16vw,16rem)] bg-sky-50 space-y-5">
        <div className="text-center">
          <h1 className="text-[clamp(2rem,5vw,3rem)] capitalize font-black ">
            Meme Generator
          </h1>
          <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal">
            Easily create and share memes with your friends
          </p>
        </div>
        <Editor defaultTexts={[]} img="" />

        <div className="flex flex-col gap-5 bg-white p-[clamp(1.25rem,5vw,2rem)] border border-gray-200 rounded-md">
          <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold capitalize">
            About Meme Generator
          </h2>
          <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal  leading-loose">
            Introducing our Meme Generator the ultimate tool for unleashing your
            creativity and humor! Our user-friendly FREE Meme Maker website
            allows you to effortlessly create memes and share them with your
            friends making them laugh.
          </p>
          <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold capitalize">
            How to Use This Meme Generator
          </h2>
          <ul className="list-disc text-[clamp(1rem,5vw,1.25rem)] font-normal pl-8 space-y-2">
            <li className="text-[clamp(1rem,5vw,1.25rem)] font-normal  leading-loose">
              <strong>Choose Template:</strong> Upload or choose a meme template
              from our library.
            </li>
            <li className="text-[clamp(1rem,5vw,1.25rem)] font-normal  leading-loose">
              <strong>Text Customization:</strong> Add text to the meme and to
              customise it click on the <IoSettings className="inline" /> button
              and change the text color, size and also drag the text in the
              position to match your meme.
            </li>
            <li className="text-[clamp(1rem,5vw,1.25rem)] font-normal  leading-loose">
              <strong>Generate & Share:</strong> Finish designing your meme then
              hit on the generate meme button, your meme will be downloaded and
              then share it with your friends.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 bg-white p-[clamp(1.25rem,5vw,2rem)] border border-gray-200 rounded-md">
          <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold capitalize">
            More Meme Generators
          </h2>
          <div className="flex flex-wrap gap-4">
            {memeGenerators.map((m) => (
              <Link
                key={m.slug}
                href={`/meme-generator/${m.slug}`}
                className="cursor-pointer"
                title={`${m.title} Meme Generator`}
              >
                <Image
                  src={m.img}
                  width={100}
                  height={100}
                  className="hover:scale-105 rounded-md"
                  alt={`${m.title} Meme Generator`}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
