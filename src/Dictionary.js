import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";




export default function Dictionary () {
    let [Keyword, setKeyword] = useState("scary movie");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
     setResults(response.data);
  }
    function search () {
       // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    function handleKeywordChange (event) {
      setKeyword(event.target.value);
  }
  function load() {
setLoaded(true);
search();
  }
    if (loaded) {
    return (
        <div className="Dictionary">
          <section> 
            <h2>Word Dictionary 📚 Look It Up🔍</h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="🔍" />
          </form>
          <div className="hint">
            suggested words:sunset, knife, flower, Agoraphobia... 
          </div>
          </section>
          <Results results={results} />
        </div>
    )
} else {
  load();
  return "Loading";
}
}