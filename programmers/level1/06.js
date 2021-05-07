// 같은 숫자는 싫어

function solution(arr) {
  return arr.reduce((acc, currValue) => {
    const prevValue = acc[acc.length - 1];
    if (prevValue !== currValue) acc.push(currValue);

    return acc;
  }, []);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));

// filter를 사용하는 방법
function solution2(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

console.log(solution2([1, 1, 3, 3, 0, 1, 1]));
console.log(solution2([4, 4, 4, 3, 3]));
