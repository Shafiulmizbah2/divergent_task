import Head from "next/head";
import Footer from "./components/Footer";
import CategorySection from "./components/home/CategorySection";
import Header from "./components/home/Header";
import NewRelease from "./components/home/NewRelease";
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
        <CategorySection />
        <NewRelease />
      </main>

      <Footer />
    </>
  );
};

export default Home;
