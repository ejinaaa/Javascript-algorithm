// 자연수 뒤집어 배열로 만들기

function solution(n) {
  const s = n + '';
  let answer = [];

  for (let i = s.length - 1; 0 <= i; i--) {
    answer.push(+s[i]);
  }

  return answer;
}

console.log(solution(12345));

function solution2(n) {
  return (n + '')
    .split('')
    .reverse()
    .map(v => parseInt(v));
}

console.log(solution2(12345));

function solution3(n) {
  let answer = [];
  while (0 < n) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
}

console.log(solution3(12345));
