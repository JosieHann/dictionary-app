import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <h3>Phonetics</h3>
      {props.phonetic.audio && (
        <a href={props.phonetic.audio}  rel="noreferrer">
          🔊
        </a>
      )}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}