import React from "react";

const VerticalLine: React.FC = (): JSX.Element => {
  return (
    <div
      style={{ zIndex: "50" }}
      className="w-tiny h-96 bg-info mx-auto my-48 position-relative"
    ></div>
  );
};

export default VerticalLine;
