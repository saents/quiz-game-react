import React, { useState } from "react";

import ResultModal from "./components/ResultModal";
import GameModal from "./components/GameModal";
import { questions } from "./utils/questionsData";

import "./index.scss";

const questionsLib = [...questions];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questionsLib[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className='App'>
      {step !== questionsLib.length ? (
        <GameModal
          questionsLib={questionsLib}
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <ResultModal
          questionsLib={questionsLib}
          correct={correct}
        />
      )}
    </div>
  );
}

export default App;
