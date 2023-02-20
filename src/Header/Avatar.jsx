import styled from "styled-components";

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #fddcbb;
  box-shadow: 0 0 0 3px #fff, 0 0 0 6px lightgray;
`;

const Emoji = styled.span`
  font-size: 48px;
`;

const Avatar = ({ emoji }) => {
  return (
    <AvatarWrapper>
      <Emoji>{emoji}</Emoji>
    </AvatarWrapper>
  );
};

export default Avatar;
