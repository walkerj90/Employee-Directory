import React from "react";

function Row(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">Employee Directory</h2>
        </div>
      </div>
      <div className={`row${props.fluid ? "-fluid" : ""}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Row;
