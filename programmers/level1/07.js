// 나누어 떨어지는 숫자 배열

// function solution(arr, divisor) {
//   let resultArr = [];

//   resultArr = arr
//     .filter(v => !(v % divisor))
//     .sort((left, right) => left - right);
//   if (!resultArr.length) resultArr.push(-1);

//   return resultArr;
// }

function solution(arr, divisor) {
  const resultArr = arr
    .filter(v => !(v % divisor))
    .sort((left, right) => left - right);

  return resultArr.length ? resultArr : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
