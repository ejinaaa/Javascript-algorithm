// [1차] 비밀지도

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    const bin1 = arr1[i].toString(2);
    const bin2 = arr2[i].toString(2);

    const binValue = +bin1 + +bin2 + '';

    let value = '';

    if (binValue.length !== n) {
      for (let i = 0; i < n - binValue.length; i++) {
        value += ' ';
      }
    }

    for (let i = 0; i < binValue.length; i++) {
      value += binValue[i] === '0' ? ' ' : '#';
    }

    answer.push(value);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
