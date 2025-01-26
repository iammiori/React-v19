export function Skeleton() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="h-7 bg-gray-200 rounded-lg w-1/3"></div>
        <div className="h-7 bg-gray-200 rounded-full w-20"></div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-inner space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
