import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav className='navbar navbar-dark navbar-expand-sm'>
            <h1 className='h2 m-2'>Matthew Damron</h1>
            <button className='navbar-toggler' type='button' data-toggle='collapse'
                data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='ml-auto navbar-nav navbar-right'>
                    {categories.map((category) => (
                    <li className={`mx-2 nav-item ${currentCategory.name===category.name && 'navActive' }`}
                        key={category.name}>
                        <span onClick={()=> {setCurrentCategory(category)}}>
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
