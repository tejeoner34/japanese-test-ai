import LevelButtons from '@/components/quiz/levelButtons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full p-6">
      <div className="w-full mx-auto pb-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Grammar Quiz (N5)</h1>
        <LevelButtons testType="grammar" />
      </div>
      {children}
    </section>
  );
}
