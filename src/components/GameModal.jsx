import React from "react";

const GameModal = ({ step, question, onClickVariant, questionsLib }) => {
  const percentage = Math.round((step / questionsLib.length) * 100);

  return (
    <>
      <div className='progress'>
        <div
          style={{ width: `${percentage}%` }}
          className='progress__inner'></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li
            onClick={() => onClickVariant(index)}
            key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameModal;
