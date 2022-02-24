import { Nav, NavTitle, Title, Logo } from "../styles/NavBar";

export default function NavBar() {
  return (
    <Nav>
      <Logo
        src={
          "https://d33wubrfki0l68.cloudfront.net/f140ee3478696725fd905f311242bfc48579b2f5/dcaca/images/logo_crewmeister_white.svg"
        }
        alt={"Crewmeister's logo"}
        className={"logo"}
      />
      <NavTitle>
        <Title>Absence Manager</Title>
      </NavTitle>
    </Nav>
  );
}
