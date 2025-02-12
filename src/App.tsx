import LikeButton from './pages/Example';
import React18Page from './pages/React18';
import React19Page from './pages/React19';

function App() {
  return (
    <div className="space-y-4 max-w-md mx-auto p-4">
      <React18Page />
      <React19Page />
      <LikeButton postId={0} initialLikes={10} />
    </div>
  );
}

export default App;
