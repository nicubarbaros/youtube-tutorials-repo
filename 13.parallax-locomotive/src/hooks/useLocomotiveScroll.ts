import { useEffect, useRef } from "react";
import LocomotiveScroll, {
  LocomotiveScrollOptions,
  Scroll,
} from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

type UseLocomotiveScrollHook = [React.RefObject<Scroll>];

type Props = {
  ref: React.RefObject<Element>;
} & Omit<LocomotiveScrollOptions, "el">;
const useLocomotiveScroll = ({
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<Scroll | null>(null);

  useEffect(() => {
    if (ref?.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        ...otherProps,
        el: ref.current,
      });
    }
    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, [ref]);
  return [locomotiveScrollRef];
};
export default useLocomotiveScroll;
