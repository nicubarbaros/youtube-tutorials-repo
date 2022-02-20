/**
 * Helper function that resolves a Promise after the specified duration (in milliseconds)
 * @private
 */
export function sleep(durationMs) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, durationMs);
  });
}