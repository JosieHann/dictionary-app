import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
          <h2>{props.results.definition}</h2>
          {props.results.meaning.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}