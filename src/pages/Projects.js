import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import music from "../img/music.png";

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";


const Projects = () => {
  return(
    <StyledProjects  
        exit = "exit" 
        variants = { pageAnimation } 
        initial = "hidden" 
        animate = "show" 
    >

            <StyledProject>
                
                <motion.h2 variants = { fade }>Auctioneer Platform</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/currency-exchange">
                    <Hide> 
                        <motion.img variants = { photoAnim } src={music} alt="Screenshot of Currency Exchange home page"/>
                    </Hide>
                </Link>
                <p className="icon-links">
                  <a target="_blank" href="https://github.com/sereyatiampati/Auctioneers-ReactJS-Client" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
                  <a target="_blank" href="https://auctioneers.vercel.app/" rel="noopener noreferrer" title="Live Link"><i class="fa-solid fa-link icons"></i></a>
                </p>

            </StyledProject>
            
            <StyledProject >
                <motion.h2 variants = { fade }>Recipe Application</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/music-application">
                    <motion.img variants = { photoAnim } src={music} alt="Screenshot of Music Application home page"/>
                </Link>
                <p className="icon-links">
                  <a target="_blank" href="https://github.com/sereyatiampati/Recipe-app" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
                  <a target="_blank" href="https://recipe-app-nu-seven.vercel.app/" rel="noopener noreferrer" title="Live Link"><i class="fa-solid fa-link icons"></i></a>
                </p>
            </StyledProject>

            <StyledProject >
                <motion.h2 variants = { fade }>Music App</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/douglas-fir">
                    <motion.img variants = { photoAnim } src={music} alt="Screenshot of Douglas Fir home page"/>
                </Link>
                <p className="icon-links">
                  <a target="_blank" href="https://github.com/sereyatiampati/Recipe-app" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
                  <a target="_blank" href="https://recipe-app-nu-seven.vercel.app/" rel="noopener noreferrer" title="Live Link"><i class="fa-solid fa-link icons"></i></a>
                </p>
            </StyledProject>

            <StyledProject >
                <motion.h2 variants = { fade }>Property Management App</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/douglas-fir">
                    <motion.img variants = { photoAnim } src={music} alt="Screenshot of Douglas Fir home page"/>
                </Link>
                <p className="icon-links">
                  <a target="_blank" href="https://github.com/sereyatiampati/Realtor-React-Front-end" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
                  <a target="_blank" href="https://realtor-sereyatiampati.vercel.app/" rel="noopener noreferrer" title="Live Link"><i class="fa-solid fa-link icons"></i></a>
                </p>
            </StyledProject>

            <StyledProject >
                <motion.h2 variants = { fade }>Shopping App</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/douglas-fir">
                    <motion.img variants = { photoAnim } src={music} alt="Screenshot of Douglas Fir home page"/>
                </Link>
                <p className="icon-links">
                  <a target="_blank" href="https://github.com/sereyatiampati/Recipe-app" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
                  <a target="_blank" href="https://recipe-app-nu-seven.vercel.app/" rel="noopener noreferrer" title="Live Link"><i class="fa-solid fa-link icons"></i></a>
                </p>
            </StyledProject>

            <StyledProject >
                <motion.h2 variants = { fade }>Shopping App</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/douglas-fir">
                    <motion.img variants = { photoAnim } src={music} alt="Screenshot of Douglas Fir home page"/>
                </Link>
                <p className="icon-links">
                  <a target="_blank" href="https://github.com/sereyatiampati/Recipe-app" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
                  <a target="_blank" href="https://recipe-app-nu-seven.vercel.app/" rel="noopener noreferrer" title="Live Link"><i class="fa-solid fa-link icons"></i></a>
                </p>
            </StyledProject>

    </StyledProjects>
)
}

const StyledProjects = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
display: flex;
flex-wrap: wrap;
align-items: center;
h2 {
    padding: 1rem 0rem;
    font-size: 2rem;
}
@media (max-width: 1300px){
    padding: 2rem 2rem;        
}
`;

const StyledProject = styled(motion.div)`
padding-bottom: 10rem;
flex: 1;
flex-basis: 30rem;
.line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img {
    width: 70%;
    height: 50%;
    object-fit: cover;
}
h2 {
    color: white;
}
.icon-links{
  display: flex;
  align-items: center;
}

.icons{
  font-size: 2.5rem;
  padding: 0 1.5rem;
  color: cornflowerblue;
}
`;

const Hide = styled.div `
overflow: hidden;
`;

export default Projects; 