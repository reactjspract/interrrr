import React from "react";

const MapFilter = () => {
  const filterArr = [3, 6, 8, 2];
  return (
    <div>
      <h3>Welcome to Filter topic</h3>
      {filterArr
        .filter((num) => num >= 5)
        .map((no) => (
          <li key={no.index}>{no}</li>
        ))}
    </div>
  );
};

export default MapFilter;
