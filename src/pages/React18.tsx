import { useState, useEffect } from 'react';
import { fetchExercise } from '../service';
import { ExerciseCard } from '../ui/ExerciseCard';
import { Exercise } from '../types/exercise';
import { Skeleton } from '../ui/Skeleton';

export default function React18Page() {
  const [exercise, setExercise] = useState<Exercise>();
  const [loading, setLoading] = useState(false);
  const [exerciseId, setExerciseId] = useState(0);

  useEffect(() => {
    const loadExercise = async () => {
      setLoading(true);
      const data = await fetchExercise(exerciseId);
      setExercise(data);
      setLoading(false);
    };
    loadExercise();
  }, [exerciseId]);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-900">React 18</h2>
        <p className="text-sm text-blue-600">useEffect + useState</p>
      </div>

      <div className="mb-6">
        {loading ? (
          <Skeleton />
        ) : (
          exercise && <ExerciseCard exercise={exercise} />
        )}
      </div>

      <button
        onClick={() => setExerciseId((id) => id + 1)}
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium 
          hover:bg-blue-600 active:bg-blue-700 transform transition
          hover:shadow-md active:scale-[0.98]"
      >
        다음 운동
      </button>
    </div>
  );
}
