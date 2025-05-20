import QuizQuestionsList from '@/components/quiz/quizQuestionsList';
import { getGrammarQuiz } from '@/lib/services/quiz.service';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Level({ params }: Props) {
  const { id } = await params;
  const questions = await getGrammarQuiz(id);
  return (
    <div>
      <h2>{id}</h2>
      <QuizQuestionsList questions={questions} />
    </div>
  );
}
