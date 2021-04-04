import React from 'react';

function About() {
    return (
        <section>
            <h3>About Me</h3>
                <div>
                    <img src={require(`../../assets/images/profile.jpg`).default}
                        alt='Matthew Damron' className='img-thumbnail' />
                    <p className='mt-3'>
                        I am a programmer in progress and always wanting to learn more. I am currently enrolled at
                        the University of Utah coding Bootcamp. I have been programing in VB.net, C#, Autodesk
                        Inventor iLogic, and AutoCAD VisualLisp around 10 years. I love developing new website and
                        applications. When things don't work the way I would like, I love figuring out what is
                        wrong.
                        <br></br>
                        <br></br>
                        I have been working in the woodworking business since 2001. During that time, I have been
                        wearing a variety of hats as a drafter, Project Engineer, Project Manager, to a CAD Manager
                        my current position. I started programing custom command and automation to start out with.
                        Then moved into .net applications also intergrading SQL data manipulation.
                    </p>
                </div>
        </section>
    );
}

export default About;
