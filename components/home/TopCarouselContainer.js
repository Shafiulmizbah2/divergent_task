import Section from "../Section";
import Carousel from "../Carousel";

const TopCarouselContainer = () => {
  return (
    <Section>
      <Section.Body>
        <Carousel>
          {[...Array(10)].map((item, idx) => (
            <Carousel.Item key={idx}>
              <Carousel.Image src="./img/image 14.png" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Section.Body>
    </Section>
  );
};

export default TopCarouselContainer;
