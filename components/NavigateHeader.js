import { useRouter } from "next/router";
import styled from "styled-components";

const NavigateHeader = ({ Title }) => {
  const router = useRouter();
  return (
    <Container>
      <NavigateHeaderIcon
        onClick={() => router.back()}
        src="./img/Vector.svg"
        alt="arrow left icon"
      />
      <NavigateHeaderTitle>{Title}</NavigateHeaderTitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 2rem 0 2rem;
  flex: 1;
`;

const NavigateHeaderIcon = styled.img`
  width: 1.75rem;
  height: 1.532rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;

const NavigateHeaderTitle = styled.p`
  flex: 1;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

export default NavigateHeader;
