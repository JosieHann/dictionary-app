import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import "./Synonyms.css";



export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synonyms={props.meaning.definitions[1].synonyms} />
          </div>
        );
      })}
    </div>
  );
}