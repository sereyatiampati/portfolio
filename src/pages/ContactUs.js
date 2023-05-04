import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle>
      <div>
        <h2 style={{ color: "#fff", fontWeight: '500' }}>Thanks for checking on me.</h2>
        <p id="chat">You wanna chat about anything or follow my work?</p>
        <h4>Can't wait to learn and hear from you...</h4>
        <button>Let's Do This</button>
        <p>
            <a target="_blank" href="https://twitter.com/emily_tiampati" rel="noopener noreferrer" title="Twitter"><i class="fa-brands fa-twitter icons"></i></a>
            <a target="_blank" href="https://github.com/sereyatiampati" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/sereyatiampati/" rel="noopener noreferrer" title="Linkedin"><i class="fa-brands fa-linkedin icons"></i></a>
        </p>
        <p>Made by Emilly - as Herself</p>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  text-align: center;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  h4{
   border-bottom: 3px solid #23d997;
   padding-bottom: 4px;
   margin: 0 auto;
   font-weight: 400;
   font-style: italic;
   width: 40%;
  }
  button{
    padding: 20px 80px;
    margin-top: 2.5rem;
    border: 1px solid #23d997;
    font-size: 1.5rem;
  }
  .icons{
    font-size: 3.5rem;
    margin-right: 3rem;
    color: #3273dc;
  }
  #chat{
    font-style: italic;
    margin-top: 0;
    font-weight: 400;
  }
`;
const Title = styled.div`
  margin-bottom: 0.5rem;
  color: black;
  text-align: center;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  h2 {
    margin: 2rem 0;
  }
`;

export default ContactUs;
