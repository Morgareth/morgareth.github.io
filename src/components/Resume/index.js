import React from 'react';
import resumePDF from '../../assets/Resume-Matthew-Damron.pdf'

function Resume() {
    const frontendSkills = [
        'HTML', 'CSS', 'JavaScript', 'jQuerry', 'React', 'Bootstrap'
    ]
    const backendSkills = [
        `API's`, 'Node', 'Express', 'MySql, Sequelize', 'MongoDB, Mongoose'
    ]
    
    return (
        <section>
            <h3>Resume</h3>
                Download My <a href={resumePDF} download>Resume</a>
            <div>
                <h4 className='mt-4'>Front-end Skills</h4>
                {frontendSkills.map((skills) => (
                    <ul>
                        <li>{skills}</li>
                    </ul>
                ))}
                <h4 className='mt-4'>Back-end Skills</h4>
                {backendSkills.map((skills) => (
                    <ul>
                        <li>{skills}</li>
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default Resume;
