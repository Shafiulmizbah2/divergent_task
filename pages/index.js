import Head from "next/head";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Divergent App</title>
        <meta name="description" content="This is a task project." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hello there</h1>
      </main>
      <Footer />
    </>
  );
}
