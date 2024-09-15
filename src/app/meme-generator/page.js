import Editor from "components/editor";
import { IoSettings } from "react-icons/io5";

export const metadata = {
  title: "Meme Generator - Memewizy",
  description:
    "Our Meme Generator allows you to unleash your creativity and humor! Our user-friendly FREE Meme Maker tool allows you to effortlessly create memes and share them with your friends making them laugh.",
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
            Our Meme Generator allows you to unleash your creativity and humor!
            Our user-friendly FREE Meme Maker tool allows you to effortlessly
            create memes and share them with your friends making them laugh.
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
              hit on the generate meme button and your meme will be downloaded
              which you can share with your friends.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
