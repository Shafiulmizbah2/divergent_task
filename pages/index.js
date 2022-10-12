import CategorySection from "../components/home/CategorySection";
import Header from "../components/home/Header";
import NewRelease from "../components/home/NewRelease";
import TopCarouselContainer from "../components/home/TopCarouselContainer";

const Home = () => {
  return (
    <main>
      <Header />
      <TopCarouselContainer />
      <CategorySection />
      <NewRelease />
    </main>
  );
};

export default Home;
