import React from "react";
//Import Icons
import ai from "../img/artificial-intelligence.svg"
import ml from "../img/machine-learning.svg"
import is from "../img/confidential-information.svg"
import fintech from "../img/fintech.svg"
import interest from "../img/interests.jpg"

//Styles
import { About, Description, InterestImage } from "../styles";
import styled from "styled-components";

const InterestsSection = () => {

  return (
    <Interests>
        <InterestImage>
          <img alt="camera" src={interest} height = "500" width="450"/>
        </InterestImage>
      <Description>
        <h2>
          Professional <span>interests</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={ai} width="50" height="50"/>
              <h3>Arificial Intelligence</h3>
            </div>
            <p>Replicating human intelligence in machines.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={ml} width="50" height="50"/>
              <h3>Machine Learning</h3>
            </div>
            <p>Teaching computers to learn autonomously.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={is} width="50" height="50" />
              <h3>Information Security</h3>
            </div>
            <p> Ensure the safety and privacy of critical data</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={fintech} width="50" height="50" />
              <h3>Fintech</h3>
            </div>
            <p>Delivery of Finacial services using Technology.</p>
          </Card>
        </Cards>
      </Description>
    </Interests>
  );
};

const Interests = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  margin: 0 1.5rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default InterestsSection;
