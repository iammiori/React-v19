import {
  startTransition,
  Suspense,
  use,
  useOptimistic,
  useState,
  version,
} from 'react';
import { fetchExercise } from '../service';
import { ExerciseCard } from '../ui/ExerciseCard';
import { Skeleton } from '../ui/Skeleton';

type Props = {
  id: number;
};
const AsyncExercise = ({ id }: Props) => {
  const exercise = use(fetchExercise(id));
  return <ExerciseCard exercise={exercise} />;
};

export default function React19Page() {
  const [exerciseId, setExerciseId] = useState(0);
  const [optimisticId, addOptimisticId] = useOptimistic(
    exerciseId,
    (currentId) => currentId + 1
  );

  const loadNext = () => {
    startTransition(() => {
      addOptimisticId(exerciseId);
      setExerciseId((prev) => prev + 1);
    });
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-900">React {version}</h2>
        <p className="text-sm text-blue-600">use + useOptimistic</p>
      </div>

      <div className="mb-6">
        <Suspense fallback={<Skeleton />}>
          <AsyncExercise id={optimisticId} />
        </Suspense>
      </div>

      <button
        onClick={loadNext}
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium 
          hover:bg-blue-600 active:bg-blue-700 transform transition
          hover:shadow-md active:scale-[0.98]"
      >
        다음 운동
      </button>
    </div>
  );
}
