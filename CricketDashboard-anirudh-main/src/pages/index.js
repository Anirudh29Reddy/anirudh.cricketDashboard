
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";
import Homes from "./Homes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Homes />
    </>
  );
}
