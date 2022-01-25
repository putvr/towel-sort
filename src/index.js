
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((acc, val, idx) => {
    const last = (idx % 2 === 0) ? val : val.reverse();
    acc = [...acc, ...last];
    return acc;
  }, []);
}
