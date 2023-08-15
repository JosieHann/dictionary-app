import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {
    let [Keyword, setKeyword] = useState("");
    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }
    function handleResponse (response){
      console.log(response.data);

    }
    function search (event) {
        event.preventDefault();
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=2c133oabdb09a4tc70345f314f78b4fb`;
        let apiKey = "2c133oabdb09a4tc70345f314f78b4fb" ;
        let word = "developer";
        axios.get(apiUrl).then(handleResponse);
    }
   
    return (
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
            
          </form>
        </div>
    )
}