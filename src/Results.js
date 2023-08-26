import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
        {props.results.meanings.map(function (meaning, index) { 
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
              </section>
          );
        })} </section>
      </div>
    );
  } else {
    return null;
  }
}