import { useInView } from "react-intersection-observer";

interface ScrollAnimationHook {
  ref: React.RefCallback<Element>;
  inView: boolean;
}

const useScrollAnimation = (threshold: number = 0.35): ScrollAnimationHook => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  });

  return { ref, inView };
};

export default useScrollAnimation;
