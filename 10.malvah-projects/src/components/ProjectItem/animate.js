
// https://gist.github.com/gre/1650294
const easing = {
  // no easing, no acceleration
  linear: (t) => t,
  // accelerating from zero velocity
  easeInQuad: (t) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: (t) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: (t) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
};


/**
 * Given a start/end point of a scroll and time elapsed, calculate the scroll position we should be at
 * @param start - the initial value
 * @param stop - the final desired value
 * @param elapsed - the amount of time elapsed since we started animating
 * @param - duration - the duration of the animation
 * @return - The value we should use on the next tick
 */
const getValue = (start, end, elapsed, duration, easeMethod) => {
  if (elapsed > duration) return end;
  return start + (end - start) * easing[easeMethod](elapsed / duration);
};

/**
 * Smoothly animate between two values
 */
const animate = ({
  fromValue,
  toValue,
  onUpdate,
  onComplete,
  duration = 600,
  easeMethod = "linear",
}) => {
  const startTime = performance.now();

  const tick = () => {
    const elapsed = performance.now() - startTime;

    window.requestAnimationFrame(() => {
      return onUpdate(
        getValue(fromValue, toValue, elapsed, duration, easeMethod),
        // Callback
        elapsed <= duration ? tick : onComplete
      );
    });
  };

  tick();
};

export default animate;
