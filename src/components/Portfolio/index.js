import React from 'react';

function Portfolio() {
    return (
        <section>
            <h3>Portfolio</h3>
            <div className='row row-cols-1 row-cols-lg-2'>
                <div className='container'>
                    <img src={require('../../assets/images/service-ticket-manager.png').default}
                        alt='service ticket manager' className='img-thumbnail image' key='service-ticket-manager' />
                    <div className='middle'>
                        <a href='https://service-ticket-manager.herokuapp.com/'>
                            <h5 className='text'>Service Ticket Manager</h5>
                        </a>
                        <p>HTML & CSS & Java</p>
                        <a href='https://github.com/matthewdamron/service-ticket-manager'>
                            <i className='fab fa-github fa-3x'></i>
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <img src={require('../../assets/images/run-buddy.png').default}
                        alt='service ticket manager' className='img-thumbnail image' key='run-buddy' />
                    <div className='middle'>
                        <a href='https://matthewdamron.github.io/run-buddy/'>
                            <h5 className='text'>Run Buddy</h5>
                        </a>
                        <p>HTML & CSS</p>
                        <a href='https://matthewdamron.github.io/run-buddy'>
                            <i className='fab fa-github fa-3x'></i>
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <img src={require('../../assets/images/trivia-night.jpg').default}
                        alt='service ticket manager' className='img-thumbnail image' key='service-ticket-manager' />
                    <div className='middle'>
                        <a href='https://mheyn95.github.io/trivia-game/'>
                            <h5 className='text'>Trivia Night</h5>
                        </a>
                        <p>HTML & CSS & Java</p>
                        <a href='https://github.com/matthewdamron/trivia-game'>
                            <i className='fab fa-github fa-3x'></i>
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <img src={require('../../assets/images/horiseon.png').default}
                        alt='service ticket manager' className='img-thumbnail image' key='service-ticket-manager' />
                    <div className='middle'>
                        <a href='https://matthewdamron.github.io/horiseon/'>
                            <h5 className='text'>Horiseon</h5>
                        </a>
                        <p>HTML & CSS & Java</p>
                        <a href='https://github.com/matthewdamron/horiseon'>
                            <i className='fab fa-github fa-3x'></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
