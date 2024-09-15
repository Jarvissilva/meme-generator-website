import Link from "next/link";

export const metadata = {
  title: "About Us - Memewizy",
  alternates: {
    canonical: "https://memewizy.com/about",
  },
};

export default function Page() {
  return (
    <>
      <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-tight">
        About Memewizy
      </h1>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        Welcome to Memewizy, your ultimate place for unleashing your creativity
        and spreading laughter across the internet! Memewizy is a free meme
        generator website which allows memers to easily generate memes by using
        our pre-built meme generators.
      </p>

      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        At Memewizy, we believe in that memes connect to people and brighten
        their days. Our mission is to provide you with the tools to create memes
        effortlessly. Memewizy offers a wide range of meme generators, it allows
        you to upload or choose from pre-existing meme templates and customize
        the meme according to your needs.
      </p>

      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        Ready to create memes? Go to{" "}
        <Link href="/" className="text-blue-500">
          Memewizy
        </Link>{" "}
        and let the meme generation begin and if you ever face any issues with
        our meme generator make sure you{" "}
        <Link className="text-blue-500" href="/contact">
          contact us
        </Link>{" "}
        right away.
      </p>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        Follow us on Instagram{" "}
        <Link
          href="https://instagram.com/memewizy"
          target="_blank"
          className="text-blue-500"
        >
          @memewizy
        </Link>
      </p>
    </>
  );
}
