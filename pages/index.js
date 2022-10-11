import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/home/Header";
import TopCarouselContainer from "./components/home/TopCarouselContainer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Divergent App</title>
        <meta name="description" content="This is a task project." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <TopCarouselContainer />
      </main>

      <Footer />
    </>
  );
};

export default Home;
