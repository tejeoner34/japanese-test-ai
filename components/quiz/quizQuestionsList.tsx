import { Question } from '@/lib/models/quiz';
import QuizForm from './quizForm';

const QuizQuestionsList = ({ questions }: { questions: Question[] }) => {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.questionText} className="mb-8 p-4 border rounded-xl shadow-sm bg-white">
          <QuizForm question={question} />
        </div>
      ))}
    </div>
  );
};

export default QuizQuestionsList;
