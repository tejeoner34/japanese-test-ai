import { ROUTES } from '@/lib/routing/routes';
import Link from 'next/link';

type Props = {
  testType: 'grammar' | 'kanji';
};

const levels = [
  { level: 'N5', color: 'bg-blue-500' },
  { level: 'N4', color: 'bg-green-500' },
  { level: 'N3', color: 'bg-yellow-500' },
  { level: 'N2', color: 'bg-orange-500' },
  { level: 'N1', color: 'bg-red-500' },
];

export default function LevelButtons({ testType }: Props) {
  return (
    <div>
      {levels.map((item) => (
        <button
          key={item.level}
          className={`text-white font-bold py-2 px-4 rounded mr-1.5 ${item.color} hover:bg-opacity-80 transition duration-300`}
        >
          <Link href={`${ROUTES[testType]}/level/${item.level}`}>{item.level}</Link>
        </button>
      ))}
    </div>
  );
}
