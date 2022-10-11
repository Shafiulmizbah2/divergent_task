import styled from "styled-components";

const Carousel = ({ children }) => {
  return <Container>{children}</Container>;
};

Carousel.Item = ({ children, width }) => {
  return <CarouselItem width={width}>{children}</CarouselItem>;
};

Carousel.Image = ({ src, alt = "image" }) => {
  return <Carouselmage src={src} alt={alt} />;
};

Carousel.Title = ({ title }) => {
  return <CarouselTitle>{title}</CarouselTitle>;
};

Carousel.Footer = ({ children }) => {
  return <CarouselFooter>{children}</CarouselFooter>;
};

Carousel.Action = ({ title, ...rest }) => {
  return <CarouselAction {...rest}>{title}</CarouselAction>;
};

//styles
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.8rem 0;
  overflow-x: scroll;
`;
const CarouselItem = styled.div`
  min-width: 25.6rem;
  width: ${({ width }) => (width ? width : "25.6rem")};
  object-fit: cover;
  margin: 0.5rem;
  border-radius: 1.1rem;
  overflow: hidden;
`;

const Carouselmage = styled.img`
  width: 100%;
  height: auto;
  min-height: 14.928rem;
`;

const CarouselTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 143.6%;
  margin-top: 1rem;
  padding: 0 0.8rem;
`;

const CarouselFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const CarouselAction = styled.div`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.9rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default Carousel;
