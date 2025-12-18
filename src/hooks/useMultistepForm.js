import { useState } from "react";
export function useMultistepForm(steps) {
  // 현재 몇 번째 페이지인지 숫자로 기억하기 위해
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  function next() {
    setCurrentStepIdx((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIdx((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(i) {
    setCurrentStepIdx(i);
  }

  return {
    currentStepIdx,
    step: steps[currentStepIdx], // 현재 보여줄 컴포넌트
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    goTo,
    next,
    back,
  };
}
