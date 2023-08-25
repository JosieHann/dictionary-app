import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";




export default function Dictionary () {
    let [Keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }
    function handleResponse(response) {
     setResults(response.data);
  }
    function search (event) {
        event.preventDefault();
        let apiKey = "2c133oabdb09a4tc70345f314f78b4fb";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    return (
        <div className="Dictionary">
          <section> 
            <h2>Word Dictionary 📚 Look It Up🔍</h2>
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="🔍" />
          </form>
          </section>
          <Results results={results} />
        </div>
    )
}