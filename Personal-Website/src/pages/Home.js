import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import profilePic from "../assets/Face_PNG-compressed.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="profile-wrapper">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="prompt">
              <h2>Hi, My Name is Artem</h2>
              <p>A full stack developer with a passion for learning and creating.</p>
              {/* Links with icons */}
              <a href="https://www.linkedin.com/in/artem-zagaynov-86b7511b2" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fill: "white" }} />
              </a>
              <a href="mailto:artemazag@gmail.com">
                <EmailIcon style={{ fill: "white" }} />
              </a>
              <a href="https://github.com/SharkBoy289?ocid=AIDcmmcwpj1e5v_SEM__k_Cj0KCQjwn7mwBhCiARIsAGoxjaJASHhKP6TGZIff45ZV4e-6v531gFXp9qyqt6laO99bB0UiwLgtQVoaApdtEALw_wcB_k_" target="_blank" rel="noopener noreferrer">
                <GithubIcon style={{ fill: "white" }} />
              </a>
            </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, MySQL, 
              MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL, PSQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, C#, C, C++, TypeScript, Go, R
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
