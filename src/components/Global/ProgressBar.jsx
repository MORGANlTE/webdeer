import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 20,
      backgroundColor: "#e0e0de",
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      borderRadius: 'inherit',
      transition: 'width 2s ease-in-out',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
    }
  
    return (
      <div style={containerStyles} className="mx-52 rounded-sm my-5">
        <div style={fillerStyles} className="bg-blue-900 font-fira text-white animate-loading"/>
      </div>
    );
  };
  
  export default ProgressBar;