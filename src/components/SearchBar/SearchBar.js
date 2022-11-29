import './SearchBar.css';
import React from "react";

const SearchBar = (props) => {
    return (
        <div>
            <div className="searchbar">
                <input className="searchbar-input" value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Search Movies..."></input>
            </div>
        </div>
    );
};

export default SearchBar;