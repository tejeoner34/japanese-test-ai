import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/lib/routing/routes';

export default function Home() {
  return (
    <>
      <div className="text-center space-y-4 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-blue-700">ようこそ！Japanese Test AIへ</h1>
        <p className="text-lg text-gray-600">Choose what kind of test you want to take</p>
      </div>

      <div className="mt-8 flex space-x-4 animate-fade-in-up delay-200">
        <Button asChild>
          <Link href={ROUTES.grammar}>Grammar</Link>
        </Button>
        <Button asChild>
          <Link href={ROUTES.kaji}>Kanji</Link>
        </Button>
      </div>
    </>
  );
}
