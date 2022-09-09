import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="w-full bg-red-400/10">
      <p className="text-lg text-center text-red-500/75 p-3">{errorMessage}</p>
    </div>
  );
};

export default Error;
