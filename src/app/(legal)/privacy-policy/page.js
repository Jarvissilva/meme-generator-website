import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Memewizy",
  alternates: {
    canonical: "https://memewizy.com/privacy-policy",
  },
};

export default function Page() {
  return (
    <>
      <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-tight">
        Privacy Policy
      </h1>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        Memewizy ("we," "our," or "us") respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you
        use our website https://memewizy.com. Please read this Privacy Policy
        carefully. By accessing or using Memewizy, you agree to the collection,
        use, and disclosure of your information in accordance with this Privacy
        Policy.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        1. Information We Do Not Collect
      </h2>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        We do not collect any personally identifiable information from our
        users. We do not require you to register or provide any personal
        information to access or use our website. We do not collect, store, or
        process any data related to your identity.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        2. Cookies and Third-Party Advertisements
      </h2>
      <h3 className="text-[clamp(1.2rem,5vw,1.5rem)] font-bold">Cookies:</h3>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        We use cookies to enhance your user experience. Cookies are small pieces
        of data stored on your device that help us improve the functionality and
        usability of our website. These cookies do not contain any personally
        identifiable information.
      </p>
      <h3 className="text-[clamp(1.2rem,5vw,1.5rem)] font-bold">
        Third-Party Advertisements:
      </h3>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        We may display third-party advertisements on Memewizy. These advertisers
        may use technology, such as cookies and web beacons, to collect
        information about your interaction with their advertisements. This
        information allows advertisers to provide you with more relevant ads
        tailored to your interests.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        3. How We Use Your Information
      </h2>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        We use the information collected through cookies and third-party
        advertisements to analyze trends, administer the website, track user
        movements, and gather demographic information. This information helps us
        improve the content and services we offer.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        4. Disclosure of Your Information
      </h2>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        We do not sell, trade, or otherwise transfer your personally
        identifiable information to outside parties. However, non-personally
        identifiable visitor information may be provided to third parties for
        marketing, advertising, or other uses.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        5. Your Choices
      </h2>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        You can choose to disable cookies through your browser settings. Please
        note that disabling cookies may affect the functionality of Memewizy and
        your user experience.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        6. Changes to Our Privacy Policy
      </h2>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        We reserve the right to modify this Privacy Policy at any time. Any
        changes to the policy will be posted on this page with an updated
        effective date. We encourage you to review this Privacy Policy
        periodically to stay informed about how we are handling your
        information.
      </p>
      <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold">
        7. Contact Us
      </h2>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        If you have any questions or concerns about our Privacy Policy, please{" "}
        <Link href="/contact" className="text-blue-500">
          contact us
        </Link>{" "}
        right away.
      </p>
      <p className="text-[clamp(1rem,5vw,1.25rem)] font-normal leading-loose mb-4">
        Thank you for using Memewizy!
      </p>
    </>
  );
}
