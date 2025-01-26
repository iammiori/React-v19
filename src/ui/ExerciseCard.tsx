import { Exercise } from '../types/exercise';

type Props = {
  exercise: Exercise;
};

export function ExerciseCard({ exercise }: Props) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-blue-900">{exercise.name}</h3>
        <span className="px-3 py-1.5 bg-blue-500 text-white rounded-full font-medium text-sm shadow-sm">
          {exercise.weight}kg
        </span>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-inner space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">🎯</span>
          <span className="font-medium">
            {exercise.sets}세트 × {exercise.reps}회
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-600">⏱️</span>
          <span className="font-medium">휴식 {exercise.rest}초</span>
        </div>
      </div>
    </div>
  );
}
