/* eslint-disable no-restricted-globals */
import React from "react";

export default function StringMethods() {
  let text = "W3schools";
  let text1 = "Page";
  let text2 = "Page is not found";
  const trimVar = "     Hiii Kalyani       ";
  let character = text.at(2);
  const endsWithVar = text.endsWith("ols");
  console.log(endsWithVar);
  const includesVar = text.includes("ols");
  console.log(includesVar);
  console.log(text2.split(""));

  const objectJsonVar = {
    name: "Kalyani",
    favColor: "Green",
    luckyNo: 9,
  };

  const stringJsonVar = '{ "name":"John", "age":31, "city":"New York" }';

  const stringConvert = JSON.parse(stringJsonVar);

  function getData() {
    // create a new promise
    return new Promise((resolve, reject) => {
      // simulate an asynchronous operation
      setTimeout(() => {
        const data = [1, 2, 3, 4, 5, "klkl"];
        // resolve the promise with the data
        resolve(data);
      }, 2000);
    });
  }
  function processData(data) {
    console.log(data.map((n) => n * 2));
  } // call the getData function and handle the promise with then/catch
  getData()
    .then(processData)
    .catch((error) => console.log(error));

  // Define a global variable
  let x = 101;
  // Define a function
  function add(y) {
    return x + y;
  }
  // Call the function
  let result = add(5);
  // Output the result to the console
  console.log(result);

  async function fetchData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );
    const data = await response.json();
    return data;
  }
  fetchData().then((data) => {
    console.log(data); // {userId: 1, id: 1, title: "delectus aut autem", completed: false}
  });

  // Define a function that logs a message to the console
  function logMessage() {
    console.log("Hello, world!");
  } // Schedule the logMessage function to be executed after a 1 second delay
  setTimeout(logMessage, 1000);
  // Output a message to the console
  console.log("Starting...");
  // Wait for 3 seconds before exiting the program
  setTimeout(function () {
    console.log("Exiting...");
  }, 3000);

  return (
    <div>
      <h2>String Methods</h2>
      <p>
        at -- based index value it will return: '{character}' and charAt also
        same: '{text.charAt(4)}'
      </p>
      <p>
        charCodeAt() returns the Unicode of the character at a specified
        position: {text.charCodeAt(5)} and codePointAt also same.
      </p>
      <p>Concat is: {text.concat(" ", text1)}</p>
      <p>endsWith,includes: if matched true else false</p>
      <p>
        fromCharCode: convert number to char based on ASCII values.{" "}
        {String.fromCharCode(68)}
      </p>
      <p>W3schools length: {text.length}</p>
      <p>
        localCompare == -1(if the string is sorted before the
        compareString),1(if the string is sorted after the
        compareString),0(equal): {text.localeCompare(text1)}
      </p>
      <p>
        match: {text.match("3sch")} and orginal is {text}
      </p>
      <p>padEnd:5xxx,padStart:0005</p>
      <p>
        repeat: {text1.repeat(3)} and original is {text1} , replace is:{" "}
        {text1.replace("age", "lace")}
      </p>
      <p>
        search('sc') method returns the index of the first match:{" "}
        {text.search("sc")}, org is {text}
      </p>
      <p>
        split() method splits a string into an array of substrings:{" "}
        {text2.split("")}{" "}
      </p>
      <p>
        substr() method extracts a part of a string: '{text2.substring(4, 11)}'{" "}
      </p>
      <p>
        toUpperCase(): {text2.toUpperCase()} and toLowerCase():{" "}
        {text2.toLowerCase()} and orginal is {text2}{" "}
      </p>
      <p>
        trim: {trimVar.trim()}, starting trim: '{trimVar.trimStart()}', ending
        trim: '{trimVar.trimEnd()}'
      </p>
      <h4>Json Methods</h4>
      <p>JSON convert from string to object and object to string</p>
      <p>Json object: {objectJsonVar.name}</p>
      <p>
        Object to string convert: {JSON.stringify(objectJsonVar)} and type is{" "}
        {typeof JSON.stringify(objectJsonVar)}{" "}
      </p>
      <p>String to object convert: {stringConvert.name}</p>
      <p>
        parseInt will give first number in value like 22kla o/p is 22. Better
        use nummber in thi scase will get NaN
      </p>
      <p>
        parseInt: {parseInt("10909")} and type is {typeof parseInt("10909")}
      </p>
      <p>
        parseFloat: {parseFloat("10909.90909")} and type is{" "}
        {typeof parseFloat("10909.90909")}
      </p>
      <h2>Time inetrvals</h2>
      {/* <p>{timvar}</p> */}
      <p>Window history - number of urls in history list: {history.length}</p>
      <p>
        Window go back url:{" "}
        <a href="https://www.w3schools.com/jsref/met_his_back.asp">
          Window_go_back
        </a>
      </p>
      <button onclick="history.back()">Go Back</button>
      <button onclick="history.forward()">Go Front</button>
    </div>
  );
}
