import { useEffect } from "react";
import { stopLoadingAnimation, startLoadingAnimation } from "../util/loading";

const useAnimation = () => {
  // React 가 로드가 완료되었으면 로딩 애니메이션을 중지시킨다.
  useEffect(() => {
    setTimeout(() => {
      stopLoadingAnimation();
    }, 1500)
  }, []);

  return {
    stopLoadingAnimation,
    startLoadingAnimation,
  }
}

export default useAnimation;