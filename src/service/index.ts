import { exercises } from '@/mock';
import { Exercise } from '@/types/exercise';

const cache = new Map();

export const fetchExercise = (id: number): Promise<Exercise> => {
  const key = `exercise-${id}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      new Promise<Exercise>((resolve) =>
        setTimeout(() => resolve(exercises[id % exercises.length]), 1500)
      )
    );
  }
  return cache.get(key);
};
