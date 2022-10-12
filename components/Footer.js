import styled from "styled-components";
import { useRouter } from "next/router";

const navItems = [
  {
    name: "home icon",
    src: "./img/ant-design_home-filled.svg",
    to: "/",
  },
  {
    name: "music icon",
    src: "./img/fluent_music-note-1-24-filled.svg",
    to: "",
  },
  {
    name: "play icon",
    src: "./img/fluent_play-12-filled.svg",
    to: "",
  },
  {
    name: "menu icon",
    src: "./img/gg_menu-right-alt.svg",
    to: "",
  },
  {
    name: "package icon",
    src: "./img/mdi_package-check.svg",
    to: "/packages",
  },
];

const Footer = (props) => {
  const router = useRouter();

  return (
    <Container>
      {navItems.map((item, idx) => (
        <NavItem onClick={() => router.push(item.to)} key={idx}>
          <NavIcon src={item.src} alt={item.name} />
        </NavItem>
      ))}
    </Container>
  );
};

const Container = styled.footer`
  height: 80px;
  background-color: rgba(${({ theme }) => theme.primaryLightRgb}, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;

  &:hover {
    background-color: rgba(${({ theme }) => theme.primaryLightRgb}, 0.3);
  }
`;

const NavIcon = styled.img`
  width: 2.922rem;
  height: 2.759rem;
`;

export default Footer;
