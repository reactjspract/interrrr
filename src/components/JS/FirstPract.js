import React from "react";

// ES6 features
// Arrow function
const Func = () => {
  let name = "JavaScript";
  const userDetails = {
    uname: "Kalyani",
    height: 5.7,
    color: "white",
    address: {
      vilage: "Botlagudur",
      city: "Pamur",
      zipcode: 523110,
    },
  };
  // Object destucturing
  const { uname, height, color, address } = userDetails;

  // Spread oprator
  const updateUserDetails = {
    ...userDetails,
    uname: "RK",
  };

  // JS Hoisting
  // console.log(luckyNo);
  // let luckyNo = 9;
  // console.log(luckyNo);

  // luckyNo = 9;
  // const luckyNo; // value needs to give
  // console.log(luckyNo);

  luckyNo = 9;
  var luckyNo; // 9
  console.log(luckyNo);

  const details = {
    fname: "Kalyani Rayavarapu",
    topic: "Clousers",
    getFullName: function () {
      console.log(this.fname);
      const getTopic = () => {
        console.log(this.topic);
        return this.topic;
      };
      getTopic();
      return this.fname;
    },
  };
  details.getFullName();

  return (
    <div>
      <h2>Hi, welcome to JS interview practice</h2>
      {/* template literals */}
      <h3>{` Name is: ${name}`}</h3>
      <h4>{`User name is ${userDetails.uname}`}</h4>{" "}
      {/* from previous object */}
      <h4>{`User height is ${height}`}</h4>
      <h4>{`Spreadoperator values: uname is ${updateUserDetails.uname} and color is ${updateUserDetails.color}`}</h4>
      <h4>
        {`Ternary operator:`}
        {updateUserDetails.height >= 5.6
          ? "Hieght is above 5.6 then height is high for girls"
          : "Otherwise height is average"}
      </h4>
      <h4>{`Clousers: Details full name ia ${details.getFullName()} and topic is ${details.getFullName()}`}</h4>
    </div>
  );
};

export default Func;
