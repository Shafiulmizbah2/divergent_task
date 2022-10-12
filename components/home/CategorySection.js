import styled from "styled-components";
import Section from "../Section";

const Categories = ["জীবনী", "গজল", "জীবনী", "গজল", "জীবনী", "গজল"];

const CategorySection = () => {
  return (
    <Section>
      <Section.Header>
        <Section.Title title="Explore Category" />
        <Section.Link title="View All" />
      </Section.Header>
      <Section.Body>
        <CategoryContainer>
          {Categories.map((item, idx) => (
            <Category key={idx}>
              <img src="./img/Chart.png" alt="chart" />
              <p>{item}</p>
            </Category>
          ))}
        </CategoryContainer>
      </Section.Body>
    </Section>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Category = styled.div`
  width: 16.7rem;
  min-width: 16.7rem;
  height: 6.3rem;
  display: flex;
  align-items: center;

  border-radius: 1rem;
  margin: 0.5rem;
  padding-left: 1rem;
  position: relative;

  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  & > p {
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  &:nth-child(odd) {
    background: linear-gradient(135deg, #868cff 0%, #4318ff 100%);
  }

  &:nth-child(even) {
    background: linear-gradient(135deg, #3ea72b 0%, #c2f0ba 100%);
  }
`;

export default CategorySection;
