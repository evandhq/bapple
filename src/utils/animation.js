/*
* This function is written by Mohammad Mohebifar
* https://github.com/mohebifar
*
* I tried to improve it.
* */
export default function animate({ start, end, duration, onRequest, onComplete }) {
  const startTime = Date.now();
  const diff = end - start;

  function step() {
    const elapsed = Date.now() - startTime;
    const time = elapsed / duration;
    let value = time * diff + start;

    if ((diff > 0 && value >= end) || (diff <= 0 && value <= end)) {
      value = end;
    } else {
      requestAnimationFrame(step);
    }

    onRequest(value);

    if (value === end) {
      onComplete();
    }
  }

  requestAnimationFrame(step);
}
