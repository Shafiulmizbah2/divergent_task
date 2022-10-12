import styled from "styled-components";
import CategorySection from "../components/home/CategorySection";
import Header from "../components/home/Header";
import NewRelease from "../components/home/NewRelease";
import TopCarouselContainer from "../components/home/TopCarouselContainer";

const Home = () => {
  return (
    <main>
      <Wrapper>
        <Header />
        <TopCarouselContainer />
        <CategorySection />
        <NewRelease />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 375px;
  margin: 0 auto 0.2rem auto;
`;

export default Home;
