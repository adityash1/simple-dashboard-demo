import StyledText from "./Text";
import styled from "styled-components";

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 100px;
  margin-left: 20px;
  background-color: #e5e5e5;
`;

const Stats = () => {
  return (
    <StyledTextWrapper>
      <StyledText
        upperText="Total Revenue"
        middleText="$32,621.72"
        lowerText="433 Orders"
      />
      <VerticalLine />
      <StyledText
        upperText="Subscribers"
        middleText="484,205"
        lowerText="$56 Average Order"
      />
      <VerticalLine />
      <StyledText
        upperText="Conversations"
        middleText="552,553"
        lowerText="5min Average Response Time"
      />
      <VerticalLine />
    </StyledTextWrapper>
  );
};

export default Stats;
