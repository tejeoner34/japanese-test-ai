import LevelButtons from '@/components/quiz/levelButtons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full p-6">
      <div className="w-full mx-auto pb-6">
        <h1 className="custom-title">Kanji Quiz</h1>
        <LevelButtons testType="kanji" />
      </div>
      {children}
    </section>
  );
}
