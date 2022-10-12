import styled from "styled-components";

function Section({ children }) {
  return <Container>{children}</Container>;
}

Section.Header = ({ children, style }) => {
  return <SectionHeader style={style}>{children}</SectionHeader>;
};

Section.Title = ({ title, caption }) => {
  return (
    <SectionTitle>
      {title}
      <span>{caption}</span>
    </SectionTitle>
  );
};

Section.Link = ({ title }) => {
  return <SectionLink>{title}</SectionLink>;
};

Section.Body = ({ children }) => {
  return <SectionBody>{children}</SectionBody>;
};

const Container = styled.section`
  margin: 1rem 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SectionTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.text};
  }
`;

const SectionLink = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const SectionBody = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export default Section;
