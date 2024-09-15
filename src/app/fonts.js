import { Poppins, Redressed } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});
