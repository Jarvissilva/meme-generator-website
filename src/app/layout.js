import "app/style.css";
import Script from "next/script";
import { poppins } from "app/fonts";
import Header from "components/header";
import Footer from "components/footer";

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "QFh8IfdWgUeG_MJIfEETny9ZWujg2kwm6KwEqP7CBK0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TLLGJ9LXVZ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TLLGJ9LXVZ');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
