//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var date = new Date().getHours();
var word = "";
date = 20;
console.log(date);

const styles = {
  color: "black"
};

if (date >= 12 && date < 18) {
  word = "Good Afternoon";
  styles.color = "green";
} else if (date >= 18 && date <= 23) {
  word = "Good Evening";
  styles.color = "blue";
} else if (date >= 0 && date < 12) {
  word = "Good Morning";
  styles.color = "red";
}

ReactDOM.render(
  <div>
    <h1 style={styles} className="heading">
      {word}
    </h1>
  </div>,
  document.getElementById("root")
);
