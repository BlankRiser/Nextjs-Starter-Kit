import Head from "next/head";
import Image from "next/image";
import ThemeToggle from "../UI/ThemeToggle/ThemeToggle";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next Starter kit</title>
        <meta name="description" content="Next Starter kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-4xl font-mono dark:text-white">
          NextJs Starter
        </h1>
        <ThemeToggle />
      </main>
    </div>
  );
}
