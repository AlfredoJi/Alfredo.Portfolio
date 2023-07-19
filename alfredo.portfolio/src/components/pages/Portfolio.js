import React from 'react';
import Bob from '../../images/bobs-home.png';
import Table from '../../images/tablespotter.PNG';
import Color from '../../images/screenshot1.png';
import github from '../../images/github_logo.png';

export default function Portfolio() {

    const data = [
        {
            name: 'Bobs Burger of the Day',
            description: 'The motivation behind this group project was to create a page that displays the individual ratings of each episode/season in Bobs Burgers along with the name of that individual burger of the day. It used www.bobsburgersapi.com to request the title (ex- “Foot Feta-ish Burger”), price, and end credits sequence image. The ratings of each episode were requested from imdb-api.com. Once those APIs were fetched, we displayed them in container that populates once the input (season/episode) was given by the user. After that was completed, we were to deploy this live application to GitHub pages.',
            Github: 'https://github.com/joshbaileydev513/bobs-burgers-project',
            Deployed: 'https://joshbaileydev513.github.io/bobs-burgers-project/',
            image: Bob,
        },
        {
            name: 'Tablespotter',
            description: 'TableSpotter is an app that allows a user to create a user profile to login and create a reservation to a preferred local resteraunt. Once the user creates a profile, a list of preferred local resteraunts will be populated. Once the user chooses a resteraunt, he/she will click book now. Once the reservation is made, the user will receive an email that they have made a successful reservation.',
            Github: 'https://github.com/JasonLewis007/Project-2',
            Deployed: 'https://desolate-garden-23789.herokuapp.com/',
            image: Table,
           
        },
        {
            name: 'Color Culture',
            description: 'This is a work in progress React application, for artists and art enthusiasts, to have their own platform to connect, browse, buy and sell art work.',
            Github: 'https://github.com/destinymarie32601/color-culture',
            Deployed: 'https://agile-sands-25127-bd108b7da8b9.herokuapp.com/',
            image: Color,
        }
    ]

    return (
        <div>
            <h1>List of my past works</h1>
            {data.map((project) => (
                <div className="portfolio-card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <a href={project.Deployed}><img src={project.image} className="img-fluid rounded-start" alt="..." /></a>
                        </div>
                        <div className="col-md-8">
                            <div className="portfolio-card-body">
                                <h5 className="portfolio-card-title">{project.name}</h5>
                                <p className="portfolio-card-text">{project.description}</p>
                                <a href={project.Github}><img src={github} className="github" alt="..." /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}