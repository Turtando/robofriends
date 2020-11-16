import React from 'react'


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div class="pa2">
            <input 
            className='pa3 ba b--green bg-lightest-blue tc'
            type='search' 
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;