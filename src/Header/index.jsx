import Avatar from "./Avatar";
import Greeting from "./Greetings";
import styled from "styled-components";
import Pill from "./Pill";

const StyledHeader = styled.header`
  width: 50vw;
  display: flex;
  padding-bottom: 20px;
`;

const PillWrapper = styled.div`
  margin-left: auto;
  margin-top: 25px;
`;

function Header() {
  return (
    <StyledHeader>
      <Avatar emoji="👨‍💻" />
      <Greeting name="Aditya" />
      <PillWrapper>
        <Pill />
      </PillWrapper>
    </StyledHeader>
  );
}

export default Header;
