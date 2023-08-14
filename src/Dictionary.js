import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary () {
    let [Keyword, setKeyword] = useState("");
    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }
    function search (event) {
        event.preventDefault();
        alert(`Please hold, Searching for ${Keyword} definition 🔍`);
    }
    return (
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
            
          </form>
        </div>
    )
}