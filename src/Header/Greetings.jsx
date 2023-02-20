import { useState, useEffect } from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  margin-left: 30px;
`;

const Greeting = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 5px;
  color: #060d1e;
`;

const DateText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #9ba0af;
  margin: 0;
`;

const Greetings = ({ name }) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <TextWrapper>
      <Greeting>
        {greeting} {name}
      </Greeting>
      <DateText>
        Here are your stats for today,{" "}
        {new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </DateText>
    </TextWrapper>
  );
};

export default Greetings;
