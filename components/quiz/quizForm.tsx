'use client';

import { Option, Question } from '@/lib/models/quiz';
import { useState } from 'react';

const QuizForm = ({ question }: { question: Question }) => {
  const [chosenAnswer, setChosenAnswer] = useState<Option | null>(null);

  const onSubmit = (option: Option) => {
    console.log('選ばれた答え:');
    setChosenAnswer(option);
  };

  return (
    <form className="space-y-4">
      <h2 className="text-lg font-semibold">{question.questionText}</h2>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`option-${index}`}
              value={option.text}
              onChange={() => onSubmit(option)}
              className="accent-blue-700"
            />
            <label
              htmlFor={`option-${index}`}
              className={`text-gray-800 cursor-pointer ${
                chosenAnswer?.text === option.text &&
                (option.isCorrect ? 'text-blue-500' : 'text-red-500')
              }`}
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
      {chosenAnswer && !chosenAnswer?.isCorrect && (
        <span className="text-green-500 text-sm">{question.explanation}</span>
      )}
    </form>
  );
};

export default QuizForm;
