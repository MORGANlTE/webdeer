import React from "react";

const MultipleChoice4 = (props) => {
  return (
    <div className="flex flex-col justify-center mt-3 mb-14 font-arial">
      <h3 className="max-w-[80%] mx-auto mb-6 mt-2 text-2xl text-white font-fira">
        {props.titel}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {props.children}
      </div>
    </div>
  );
};

export default MultipleChoice4;
