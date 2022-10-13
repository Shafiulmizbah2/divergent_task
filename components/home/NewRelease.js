import Carousel from "../Carousel";
import Section from "../Section";
import theme from "../../theme";

const NewRelease = () => {
  return (
    <Section style={{ paddingBottom: "1rem" }}>
      <Section.Header>
        <Section.Title title="New Release Video" />
        <Section.Link title="View All" />
      </Section.Header>
      <Section.Body>
        <Carousel>
          {[...Array(10)].map((item, idx) => (
            <Carousel.Item key={idx} width="25.6rem" bgColor={theme.white}>
              <Carousel.Image src="./img/image 16.png" />
              <Carousel.Title
                title="সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ
"
              />
              <Carousel.Footer>
                <Carousel.Action title="Tap to watch" />
              </Carousel.Footer>
            </Carousel.Item>
          ))}
        </Carousel>
      </Section.Body>
    </Section>
  );
};

export default NewRelease;
