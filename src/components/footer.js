import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`flex justify-center items-center p-[clamp(1rem,5vw,2.25rem)]`}
    >
      <nav>
        <ul className="flex flex-wrap justify-center gap-4 capitalize">
          <li>
            <Link href="/" className="text-lg font-normal hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-normal hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-normal hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-lg font-normal hover:text-blue-500"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
