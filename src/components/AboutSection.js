import React from "react";
import sereya from "../img/sereya.jpeg";
import ems from "../img/ems.jpeg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hello, I am Emilly</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              a <span>Software Engineer</span> & 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>a Fitness enthusiast.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          As a software engineer, I have developed, tested and deployed solutions ranging from ecommerce, inventory, and project management system among others. I have developed and secured RESTful APIs and Web Services to share intricate resources between application software. <br/>
          I am a solution-oriented Developer and a lifelong learner. I enjoy development because of the satisfaction I get by overcoming challenges. I am motivated by the opportunity that software provides to positively impact the life of individuals, and the world as a whole.
        </motion.p>
        <motion.button variants={fade}>View projects</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={ems} alt="Emilly Tiampati" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
