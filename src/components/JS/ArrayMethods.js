import React from "react";
const ArrayMethods = () => {
  const arr1 = ["ganesh", "matha", "saibaba"];
  const arr2 = ["venateswara", "lakshmi"];
  const arr3 = ["datta", "datta"];
  const fruits = [
    "Banana",
    "Orange",
    "Apple",
    "Mango",
    "Kiwi",
    "Papaya",
    "Gova",
  ];
  const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
  const fuits = ["Banana", "Orange", "Apple", "Mango", "Gova"];
  const concat_method = arr1.concat(arr2, arr3);
  console.log(concat_method);
  const copyWithIn = arr1.copyWithin(2, 0); // 2nd position values replaced by 0th position value: ganeshmathaganesh
  const copyWithIn1 = fruits.copyWithin(2, 0, 2); //BananaOrangeBananaOrangeKiwiPapaya
  const entriesVar = arr2.entries();
  console.log(entriesVar);
  // entries: iterate index and value .used for-of loop
  for (const [index, val] of entriesVar) {
    console.log(index, val);
  }
  const everyVar = arr3.every((val) => val === "datta");
  // if (everyVar) {
  //   console.log("Yes");
  // } else {
  //   console.log("No");
  // }

  const fillVar = fruits1.fill("Pam", 1, 3);

  const arr = [2, 5, 4, 88, 55, 33];
  const filterVar = arr.filter((res) => res >= 33);
  console.log(arr);
  console.log(filterVar);

  const findVar = arr.find((num) => num % 5 === 0);
  console.log(findVar);

  const findIndexVar = arr.findIndex((num) => num % 5 === 0);
  console.log(findIndexVar);

  const flatVar = [2, 4, [3, 6], [66, 33, 22], [-1, -4, 9]].flat();
  console.log(flatVar);
  const name = "Rayavarapu";
  const fromVar = Array.from(name);
  console.log(fromVar);

  const includesVar = fuits.includes("Apple");
  console.log(includesVar);

  const indexOfVar = fuits.indexOf("Apple");
  const lastIindexOfVar = fuits.lastIndexOf("Apple");
  console.log(lastIindexOfVar);

  const joinVar = fruits.join();
  console.log(joinVar);
  console.log(Object.keys(fruits));

  const mapVar = arr.map((val) => val * 5).join();

  const popArr = [2, 5, 3, 77, 99, 44];

  function isGreaterThan5(element, index, array) {
    return element > 5;
  }

  let val5 = arr.some(isGreaterThan5);

  console.log(val5);
  return (
    <div>
      <h2>Array Methods</h2>
      <p>Concat values are: {concat_method}</p>
      <p>
        CopyWithIn value is: {copyWithIn} and {copyWithIn1}, {everyVar}
      </p>
      <p>
        Every topic: {everyVar ? "Yes" : "No"}, because all values are same.
      </p>
      <p>Fill topic(pam filled): {fillVar}</p>
      <p>Filter topic: {filterVar}</p>
      <p>
        Find topic - first found value will display: {findVar} and findindex :{" "}
        {findIndexVar}
      </p>
      <p>Flat topic - concatenates sub-array elements: {flatVar}</p>
      <p>From topic - string to array convertion: {fromVar}</p>
      <p>Includes topic - if correct value then true else false</p>
      <p>
        indexOfVar topic -value's index: {indexOfVar} and lastIndexOf value is:{" "}
        {lastIindexOfVar}
      </p>
      <p>Join topic -def : {joinVar}</p>
      <p>Object keys topic : {Object.keys(fruits).join()} </p>
      <p>Object Values topic : {Object.values(fruits).join()}</p>
      <p>Length topic:{fruits.length}</p>
      <p>Map topic:{mapVar}</p>
      <p>
        Pop topic:removed {popArr.pop()} and orginal array is {popArr}
      </p>
      <p>
        Push topic:orginal array is {arr.join()},added {arr.push(88, 59)}, after
        array is {arr.join()}
      </p>
      <p>reduce() method returns a single value: </p>
      <p>
        original array: {arr.join()} and reversed array: {arr.reverse().join()}
      </p>
      <p>
        Shift topic- remove first value in array: {arr.shift()} and UnShift
        topic- add first value in array: {arr.unshift(48)}
      </p>
      {/* Slice,sort. Sort -> will sort based on alpha order but for numbers just sort() then will give like 1,100,40,500 because based on first number. So need to use function. */}
      <p>
        Slice topic(1,5): {arr.slice(1, 5).join()} and orginal array topic:{" "}
        {arr.join()} and sort array in Asc: is{" "}
        {arr
          .sort(function (a, b) {
            return a - b; // asc, b-a decending
          })
          .join()}{" "}
        and decending:{" "}
        {arr
          .sort(function (a, b) {
            return b - a;
          })
          .join()}
      </p>
      <p>
        toString topic(array to string by comma Spreadoperator):{" "}
        {fruits.toString()}
      </p>
      <p>
        Some topic(will send true/false if one elm passed test then true
        otherwise false)
      </p>
    </div>
  );
};

export default ArrayMethods;
