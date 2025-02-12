import { startTransition, useOptimistic } from 'react';

function mockLikePostApi(postId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 80% 확률로 성공, 20% 확률로 실패
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      Math.random() > 0.2
        ? resolve()
        : reject(new Error(`Failed to like post ${postId}`));
    }, 1000);
  });
}

export default function LikeButton({
  postId,
  initialLikes,
}: {
  postId: number;
  initialLikes: number;
}) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic<number, number>(
    initialLikes,
    (state, increment) => state + increment
  );

  async function handleLike() {
    // 낙관적 업데이트를 transition으로 래핑
    startTransition(() => {
      addOptimisticLike(1);
    });

    try {
      await mockLikePostApi(postId);
      console.log(`Post ${postId} liked successfully.`);
    } catch {
      startTransition(() => {
        addOptimisticLike(-1);
      });
    }
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes} Likes</button>;
}

// ref: https://codefinity.com/blog/React-19-useOptimistic
