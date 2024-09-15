import Link from "next/link";

export const metadata = {
  title: "Contact Us - Memewizy",
  alternates: {
    canonical: "https://memewizy.com/contact",
  },
};

export default function Page() {
  return (
    <>
      <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-tight">
        Contact Us
      </h1>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        If you have face any issues on our website or have queries then feel
        free to contact us on instagram{" "}
        <Link
          className="text-blue-500"
          target="_blank"
          href="https://instagram.com/memewizy"
        >
          @memewizy
        </Link>
      </p>
    </>
  );
}
