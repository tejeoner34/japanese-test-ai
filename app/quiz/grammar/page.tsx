import { getGrammarQuiz } from '@/lib/services/quiz.service';

export default async function GrammarPage() {
  const questions = await getGrammarQuiz('N5');
  console.log(questions);
  if (!questions || questions.length === 0) return 'loading';
  return (
    <div>
      <h1>Grammar page</h1>
      {questions.map((question) => (
        <div key={question.questionText} className="mb-4">
          <h2 className="text-lg font-bold">{question.questionText}</h2>
          <ul className="list-disc pl-5">
            {question.options.map((option, index) => (
              <li key={index} className="text-gray-700">
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
