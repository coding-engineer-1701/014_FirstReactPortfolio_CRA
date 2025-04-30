import React, { useState } from 'react';

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");

    const handleUserInput = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const response = await searchSpotify(searchText);
        }
        
    }

    return (
        <>
            <p>Search Bar</p>
            <form onSubmit={handlesubmit}>
                <input
                    id="searchtext"
                    name="searchtext"
                    type="text"
                    value={seachText}
                    onChange={handleUserInput}
                />
                <button type="submit">Search!</button>
            </form>
        </>
    )
}

export default SearchBar;