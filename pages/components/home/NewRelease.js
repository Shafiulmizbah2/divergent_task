import Carousel from "../Carousel";
import Section from "../Section";

const NewRelease = () => {
  return (
    <Section>
      <Section.Header>
        <Section.Title title="New Release Video" />
        <Section.Link title="View All" />
      </Section.Header>
      <Section.Body>
        <Carousel>
          {[...Array(10)].map((item, idx) => (
            <Carousel.Item key={idx} width="25.6rem">
              <Carousel.Image src="./img/image 14.png" />
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
