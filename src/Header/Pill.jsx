import styled from "styled-components";

const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: #333;
  padding: 2px 5px;
  border-radius: 20px;
  font-weight: bold;
  margin-left: 20px;
  box-shadow: 0 0 0 2px whitesmoke;
`;

const TodayText = styled.p`
  margin: 0;
  margin-left: 5px;
  margin-right: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Pill = () => {
  return (
    <PillWrapper>
      <IconWrapper>
        📆
        <TodayText>Today</TodayText>
      </IconWrapper>
    </PillWrapper>
  );
};

export default Pill;
