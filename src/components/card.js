import Image from "next/image";
import Link from "next/link";

export default function Card({ title, img, slug }) {
  return (
    <div className="w-full sm:w-[47%] lg:w-[30%] p-5 bg-white border border-gray-200 rounded-md break-all space-y-3">
      <Image
        src={img}
        width={100}
        height={100}
        layout="responsive"
        className="rounded-md"
      />
      <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold capitalize hover:text-blue-500">
        <Link href={slug}>{title}</Link>
      </h2>
    </div>
  );
}
