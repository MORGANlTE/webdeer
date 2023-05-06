import React from "react";
import OneImageAnswer from "./OneImageAnswer";

const NotMultipleChoice = (props) => {
  return (
    <>
      {props.question.id === 1 && (
        <OneImageAnswer
          question={props.question}
          options={[{ x: 0, y: 0, correct: false }]}
        />
      )}
    </>
  );
};

export default NotMultipleChoice;
