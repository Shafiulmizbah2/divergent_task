import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <HeaderLeft>
        <HeaderCircle />
        <HeaderInfo>
          <HeaderTitle>Hi there!</HeaderTitle>
          <HeaderCaption>Subscribe for Premium experience</HeaderCaption>
        </HeaderInfo>
      </HeaderLeft>
      <HeaderRight>
        <Search src="./img/search.svg" alt="search" />
      </HeaderRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderInfo = styled.div``;
const HeaderTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
`;

const HeaderCaption = styled.p`
  font-size: 1.5rem;
  line-height: 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const HeaderCircle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 100%;
  margin-right: 1rem;
`;

const HeaderRight = styled.div``;

const Search = styled.img`
  width: 1.9rem;
  height: 1.927rem;
  cursor: pointer;
`;

export default Header;
