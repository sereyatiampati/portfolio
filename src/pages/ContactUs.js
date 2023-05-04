import React from "react";
//Animations
import { motion } from "framer-motion";
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
        <p>Made by Emilly Tiampati - as Herself</p>
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
  @media screen and (max-width: 768px) {
    h4 {
      width: 80%;
    }
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


export default ContactUs;
