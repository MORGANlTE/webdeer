import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    transition: "width 2s ease-in-out",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="fixed bottom-0 flex flex-col items-center w-4/5 h-12 -translate-x-1/2 rounded-t-full align left-1/2 bg-background drop-shadow-[0_0_5px_rgba(68,150,255,0.10)] ">
      <div
        style={containerStyles}
        className="fixed w-4/5 h-full my-5 rounded-sm"
      >
        <div
          style={fillerStyles}
          className="text-white bg-blue-900 font-fira animate-loading"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
