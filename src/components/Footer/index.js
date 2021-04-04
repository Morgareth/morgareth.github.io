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
            </div>
            <p>Website created with REACT <i class="fab fa-react"></i></p>
        </footer>
    );
}

export default Footer;
