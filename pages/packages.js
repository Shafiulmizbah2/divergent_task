import styled from "styled-components";
import NavigateHeader from "../components/NavigateHeader";
import Section from "../components/Section";

const Packages = () => {
  return (
    <main>
      <Wrapper>
        <NavigateHeader Title="Packages" />
        <Section>
          <Section.Header style={{ marginTop: "1rem" }}>
            <Section.Title title="Enjoy Unlimited Music & Videos" />
          </Section.Header>
          <Section.Body>
            <ItemContainer>
              <Item>
                <ItemIcon src="./img/Group 20.svg" alt="lock icon" />
                <ItemTitle>Unlock premium Natok and dramas</ItemTitle>
              </Item>

              <Item>
                <ItemIcon src="./img/Group 1625.svg" alt="Download icon" />
                <ItemTitle>Unlimited download</ItemTitle>
              </Item>

              <Item>
                <ItemIcon src="./img/Group 1675.svg" alt="HD icon" />
                <ItemTitle>Watch in HD up to 4K resolution</ItemTitle>
              </Item>
            </ItemContainer>
          </Section.Body>
        </Section>

        <Section>
          <Section.Header>
            <Section.Title
              title="Select Premium Plan"
              caption="Ad-Free, Unlimited offline Downloads and playlist"
            />
          </Section.Header>
          <Section.Body>
            <PlansContainer>
              <Plan>
                <PlanTitle>
                  Mini Packages
                  <span>15 days</span>
                </PlanTitle>
                <PlanPrice>29 BDT</PlanPrice>
              </Plan>
              <Plan>
                <PlanTitle>
                  Stander Packages
                  <span>30 days</span>
                </PlanTitle>
                <PlanPrice>39 BDT</PlanPrice>
              </Plan>
            </PlansContainer>
          </Section.Body>
        </Section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
`;

const ItemContainer = styled.div`
  margin: 1rem 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
const ItemIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
`;
const ItemTitle = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.text};
`;

const PlansContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Plan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 1rem;
  padding: 0 1rem;
  width: 32.7rem;
  height: 8.5rem;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid #d5d8e1;
  border-radius: 1rem;
`;

const PlanTitle = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.4rem;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.text};

  & > span {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.caption};
  }
`;

const PlanPrice = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.6rem;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.text};
`;

export default Packages;
