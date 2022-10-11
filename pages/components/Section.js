import styled from "styled-components";

const Section = ({ children }) => {
  return <Container>{children}</Container>;
};

Section.Header = ({ children }) => {
  return <SectionHeader>{children}</SectionHeader>;
};

Section.Title = ({ title }) => {
  return <SectionTitle>{title}</SectionTitle>;
};

Section.Link = ({ title }) => {
  return <SectionLink>{title}</SectionLink>;
};

Section.Body = ({ children }) => {
  return <SectionBody>{children}</SectionBody>;
};

const Container = styled.section`
  width: 100vw;
  margin: 2rem 0 2rem 2rem;
  overflow-x: hidden;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

const SectionLink = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const SectionBody = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export default Section;
