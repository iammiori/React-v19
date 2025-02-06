# React 19 Exercise App

React 19의 새로운 Hooks 써보기

## 주요 기능

- 운동 카드 비동기 로딩
- Optimistic UI를 통한 부드러운 사용자 경험
- 선언적인 로딩 상태 처리

## React 19의 새로운 기능

### `use` Hook

- React의 새로운 프리미티브 Hook
- Promise를 직접 컴포넌트에서 사용 가능
- 비동기 데이터를 선언적으로 처리

```jsx
const exercise = use(fetchExercise(id));
```

### `useOptimistic` Hook

- 낙관적 UI 업데이트를 위한 새로운 Hook
- 서버 응답 전에 UI를 즉시 업데이트
- 사용자 경험 향상을 위한 즉각적인 피드백 제공

```jsx
const [optimisticId, addOptimisticId] = useOptimistic(
  exerciseId,
  (currentId) => currentId + 1
);
```

## 주요 차이점

### 상태 관리 간소화

React 18: 여러 상태(exercise, loading)를 수동으로 관리
React 19: use Hook으로 데이터 페칭과 상태 관리를 단순화

### 사용자 경험

React 18: 상태 변경 시 즉각적인 로딩 상태 표시
React 19: useOptimistic을 통한 낙관적 업데이트로 더 부드러운 전환

### 코드 복잡도

React 18: 비동기 로직과 상태 관리가 명시적
React 19: 간결한 코드로 동일한 기능 구현 가능

## 사용된 기존 React 기능

### Suspense

- 비동기 컴포넌트의 로딩 상태 처리
- 선언적인 로딩 UI 구현

```jsx
<Suspense fallback={<Skeleton />}>
  <AsyncExercise id={optimisticId} />
</Suspense>
```

## 실행 방법

1. 패키지 설치

```bash
npm install
```

2. 개발 서버 실행

```bash
npm run dev
```
