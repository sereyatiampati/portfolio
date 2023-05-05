import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {

  return (
    <Faq

    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is my Techstack and Skillset">
          <div className="answer">
            <p>Software immersive full stack development, implementation, testing and support in:</p>
            <p>
              <ul>
                <ul>
                  <li>
                    Ruby on Rails: Developing and Securing RESTful APIs and RESTful Web Services with Rails, development of SOAP
                    Web Services with Rails, application of the Ruby on Rails Framework for Enterprise Web applications.,
                    bootstrapping Web Applications with Ruby on Rails MVC, implementation of database management with ActiveRecord, template rendering with ActionView, and request handling with ActionController. Unit testing using RSpec.{" "}
                  </li>
                  <li><cite>JavaScript</cite>: Client side application development with React JS, Bootsrap, HTML5 and CSS3</li>
                </ul>
                <li>
                  {" "}
                  Database Management; an understanding in structured query language (SQL) including PostgreSQL, and MySQL, knowledge of relational database management and object-oriented database management systems{" "}
                </li>
                <li>
                  {" "}
                  Information security comprising user authentication and cryptography{" "}
                </li>
                <li> Familiarity with the Agile Scrum Methodology in Software development and delivery. </li>
                <li> Version Control Tools, i.e. Git </li>
              </ul>
            </p>
          </div>
        </Toggle>
        <Toggle title="Which Schools have I attended?">
          <div className="answer">
          <p>
              {" "}
              2022 - 2023 || <span> Moringa School </span> || Software Immersive FullStack Development{" "}
            </p>
            <p>
              {" "}
              2014 - 2018 || <span> Dedan Kimathi University of Technology </span> || Bachelor of Science (BSc.)
              Information Technology{" "}
            </p>
          </div>
        </Toggle>
        <Toggle title="How to reach me?">
          <div className="answer">
            <p>Twitter, Github, Linkedin or Send me an email</p>
            <p>
            <a target="_blank" href="https://twitter.com/emily_tiampati" rel="noopener noreferrer" title="Twitter"><i class="fa-brands fa-twitter icons"></i></a>
            <a target="_blank" href="https://github.com/sereyatiampati" rel="noopener noreferrer" title="Github"><i class="fa-brands fa-github icons"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/sereyatiampati/" rel="noopener noreferrer" title="Linkedin"><i class="fa-brands fa-linkedin icons"></i></a>
            <a target="_blank" href="mailto:emilytiampati@gmail.com" rel="noopener noreferrer" title="Gmail" ><i class="fa-regular fa-envelope icons"></i></a>
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  .icons{
    font-size: 2.5rem;
    padding-right: 1.5rem;
  }
  div.answer a {
    text-decoration: none;
  }
`;

export default FaqSection;
