import { Question } from '../models/quiz';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getGrammarQuiz = async (level: string): Promise<Question[]> => {
  return fetch(`${API_URL}quiz/grammar-quiz/?level=${level}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching grammar quiz:', error));
};

export const getKanjiQuiz = async (level: string): Promise<Question[]> => {
  return fetch(`${API_URL}quiz/kanji-quiz/?level=${level}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching kanji quiz:', error));
};
