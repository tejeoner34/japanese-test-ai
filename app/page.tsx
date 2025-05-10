import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/lib/routing/routes';

export default function Home() {
  return (
    <div>
      <div>
        <h1>ようこそ！ Japanese Test AIへ</h1>
        <p>Choose what king of test you want to take</p>
      </div>

      <div>
        <Button asChild>
          <Link href={ROUTES.grammar}>Grammar</Link>
        </Button>
        <Button asChild>
          <Link href={ROUTES.kaji}>Kanji</Link>
        </Button>
      </div>
    </div>
  );
}
