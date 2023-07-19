import React from 'react';
import LinkedIn from './../images/LinkedIn_Logo.png';
import Github from './../images/github_logo.png';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Alfredo Jimenez</h4>
        <a href="https://www.linkedin.com/in/alfredo-jimenez-7271a7251/"><img src={LinkedIn} className="linked-in" alt="..."></img></a>
        <a href="https://github.com/AlfredoJi"><img src={Github} className="github" alt="..."></img></a>
      </div>
    </footer>
  );
};

export default Footer;