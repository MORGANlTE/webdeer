import React from "react";

const OneImageAnswer = (props) => {
  console.log(props.question);
  console.log(props.question.answers[0].imgUrl);
  return (
    <div className="flex flex-col justify-center h-56 mx-1 rounded-md cursor-pointer mt-28 w-[98%] bg-blu xl:h-2/3 hover:bg-blu2">
      <p className="px-3 pb-3 mt-4 text-lg text-center text-white font-fira">
        {props.text}
      </p>
      {props.question.answers[0] && (
        <img
          src={props.question.answers[0].imgUrl}
          alt="answer"
          draggable="false"
          className="mx-auto "
        />
      )}
      <p>test</p>
    </div>
  );
};

export default OneImageAnswer;
