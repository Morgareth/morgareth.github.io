import React from 'react';
import resumePDF from '../../assets/Resume-Matthew-Damron.pdf'

function Resume() {
    const frontendSkills = [
        'HTML', 'CSS', 'JavaScript', 'jQuerry', 'React', 'Bootstrap'
    ]
    const backendSkills = [
        `API's`, 'Node', 'Express', 'MySql, Sequelize', 'MongoDB, Mongoose'
    ]
    const programingSkills = [
        'C#', 'VB.net', 'iLogic(VB)', 'AutoLisp(LISP)', 'Git'
    ]
    
    return (
        <section>
            <h3>Resume</h3>
                Download My <a href={resumePDF} download>Resume</a>
            <div>
                <h4 className='mt-4'>Programing Skills</h4>
                <ul key='programingSkills'>
                    {programingSkills.map((skills) => (
                        <li key={skills}>{skills}</li>
                    ))}
                </ul>
                <h4 className='mt-4'>Web Front-end Skills</h4>
                <ul key='frontendSkills'>
                    {frontendSkills.map((skills) => (
                        <li key={skills}>{skills}</li>
                    ))}
                </ul>
                <h4 className='mt-4'>Web Back-end Skills</h4>
                <ul key='backendSkills'>
                    {backendSkills.map((skills) => (
                        <li key={skills}>{skills}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Resume;
