import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
            className='pa3 ba b--green bg-lighest-blue'
            placeholder='Search robots' 
            type='search'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;