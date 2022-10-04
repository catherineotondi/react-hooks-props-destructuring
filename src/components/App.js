import React from "react";
// import MovieCard from "./MovieCard";

function App() {
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };

  return (
    <div>
      <SocialMedia socialLinks={socialLinks} />
    </div>
  );
}

function SocialMedia({ socialLinks }) {
//function SocialMedia({ socialLinks:{github, linkedin} }) {
  const {github, linkedin} = socialLinks
  return (
    <div>
      <a href={github}>{github}</a>
      <br/>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default App;