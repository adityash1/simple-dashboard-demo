import styled from "styled-components";

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const UpperText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #9ba0af;
  margin-bottom: 4px;
`;

const MiddleText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #060d1e;
  margin-bottom: 4px;
`;

const LowerText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #9ba0af;
  margin-top: 4px;
`;

const StyledText = ({ upperText, middleText, lowerText }) => {
  return (
    <StyledTextWrapper>
      <UpperText>{upperText}</UpperText>
      <MiddleText>{middleText}</MiddleText>
      <LowerText>{lowerText}</LowerText>
    </StyledTextWrapper>
  );
};

export default StyledText;
