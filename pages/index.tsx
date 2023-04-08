import Head from "next/head";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Portfolio from "../components/sections/portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barto Molina</title>
        <meta name="description" content="Barto Molina" />
      </Head>
      <div className="space-y-10 text-lg">
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
