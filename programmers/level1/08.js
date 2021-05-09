// 가운데 글자 가져오기

function solution(s) {
  return s.length % 2
    ? s.charAt((s.length - 1) / 2)
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}

console.log(solution('abcde'));
console.log(solution('qwer'));
