import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href='https://github.com/matthewdamron' target='_blank' rel="noreferrer">
                    <i className='fab fa-github fa-2x mx-4'></i>
                </a>
                <a href='https://www.linkedin.com/in/matthew-damron-65412819' target='_blank' rel="noreferrer">
                    <i className='fab fa-linkedin fa-2x mx-4'></i>
                </a>
                <a href='https://twitter.com/Morgareth_Matt' target='_blank' rel="noreferrer">
                    <i className='fab fa-twitter fa-2x mx-4'></i>
                </a>
                <a href='https://www.credly.com/badges/27f6d982-6121-4cca-b7bc-f780bd214f25/public_url' target='_blank' rel='noreferrer'>
                    <img className='mx-2 pb-3' src={require('../../assets/images/coding-bootcamp-full-stack-developer-certificate.png').default} alt="Certificate" width='40' height='53'></img>
                </a>
            </div>
            <p>Website created with REACT <i className="fab fa-react"></i></p>
        </footer>
    );
}

export default Footer;
