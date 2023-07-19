import React from 'react';
import Image from '../../images/alfredo-jimenez.jpg'

export default function About() {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About the Man</h5>
                        <p className="card-text">Hello! My name is Alfredo Jimenez. I was born in Houston,Texas but moved to North Carolina when I was 13 years old.
                            I would say my hobbies are taking care of my cat, cars, trying new food and video games. I enlisted in the US Army Reserves
                            in 2017 as a 12N(Horizontal Construction Engineer). I spent a year in Africa helping expand and maintain the base. I
                            have worked at Sams Xpress Car Wash as a crew member and now as an assistant manager where I am in charge of maintaining the
                            wash. I took the UNCC Full-Stack Web Developer bootcamp in 2023 where we learned HTML, CSS, JavaScript, APIs, MySQL, Handlebars,
                            and MERN. MERN is MongoDB, ExpressJS, ReactJS, and NodeJS. I am currently looking to begin my career in the Web Development
                            Industry where I can learn new and exciting things.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
