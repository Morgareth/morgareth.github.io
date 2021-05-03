import React from 'react';

function Portfolio() {
    const heroku = <img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>
    const html = <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
    const css = <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
    const java = <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
    const node = <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
    const express = <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
    const mysql = <img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
    const react = <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

    const projects = [
        {
            name: 'threadSHARE',
            language: [heroku, react, html, css, java, node, express, mysql],
            image: 'threadshare.png',
            deployURL: 'https://threadshare.herokuapp.com/',
            githubURL: 'https://github.com/Mheyn95/threadshare'
        },
        {
            name: 'Service Ticket Manager',
            language: [heroku, html, css, java, node, express, mysql],
            image: 'service-ticket-manager.png',
            deployURL: 'https://service-ticket-manager.herokuapp.com/',
            githubURL: 'https://github.com/matthewdamron/service-ticket-manager'
        },
        {
            name: 'Run Buddy',
            language: [html, css],
            image: 'run-buddy.png',
            deployURL: 'https://matthewdamron.github.io/run-buddy/',
            githubURL: 'https://github.com/matthewdamron/run-buddy'
        },
        {
            name: 'Trivia Night',
            language: [html, css, java],
            image: 'trivia-night.png',
            deployURL: 'https://mheyn95.github.io/trivia-game/',
            githubURL: 'https://github.com/matthewdamron/trivia-game'
        },
        {
            name: 'Horiseon',
            language: [html, css],
            image: 'horiseon.png',
            deployURL: 'https://matthewdamron.github.io/horiseon/',
            githubURL: 'https://github.com/matthewdamron/horiseon'
        },
        {
            name: 'Work Day Scheduler',
            language: [html, css, java],
            image: 'work-day-scheduler.png',
            deployURL: 'https://matthewdamron.github.io/work-day-scheduler/',
            githubURL: 'https://github.com/matthewdamron/work-day-scheduler'
        },
        {
            name: 'Note Taker',
            language: [heroku, html, css, java, node, express],
            image: 'note-taker.png',
            deployURL: 'https://matthewdamron-note-taker.herokuapp.com/',
            githubURL: 'https://github.com/matthewdamron/note-taker'
        }
    ]
    
    return (
        <section>
            <h3>Portfolio</h3>
            <div className='row row-cols-1 row-cols-lg-2'>
                {projects.map((project) => (
                    <div className='container' key={project.name} >
                        <img src={require(`../../assets/images/${project.image}`).default}
                            alt={project.name} className='img-thumbnail image' />
                        <div className='middle'>
                            <a href={project.deployURL}>
                                <h5 className='text'>{project.name}</h5>
                            </a>
                            <p>
                                {project.language}
                            </p>
                            <a href={project.githubURL}>
                                <i className='fab fa-github fa-3x'></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
