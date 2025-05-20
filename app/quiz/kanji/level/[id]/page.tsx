import QuizQuestionsList from '@/components/quiz/quizQuestionsList';
import { getKanjiQuiz } from '@/lib/services/quiz.service';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Level({ params }: Props) {
  const { id } = await params;
  const questions = await getKanjiQuiz(id);
  return (
    <div>
      <h2 className="custom-semititle">{id}</h2>
      <QuizQuestionsList questions={questions} />
    </div>
  );
}
