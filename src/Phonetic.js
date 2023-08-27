import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div>
      <h3>Phonetics</h3>
       {props.phonetic.text}
    </div>
  );
}
