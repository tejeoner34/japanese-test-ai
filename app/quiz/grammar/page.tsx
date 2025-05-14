import QuizQuestionsList from '@/components/quiz/quizQuestionsList';
import { getGrammarQuiz } from '@/lib/services/quiz.service';

export default async function GrammarPage() {
  const questions = await getGrammarQuiz('N5');

  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Grammar Quiz (N5)</h1>
      <QuizQuestionsList questions={questions} />
    </div>
  );
}
