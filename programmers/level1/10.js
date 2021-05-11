// 문자열 다루기 기본

function solution(s) {
  let answer = false;

  if (s.length === 4 || s.length === 6) answer = true;

  for (let i = 0; i < s.length; i++) {
    if (Number.isNaN(+s[i])) {
      answer = false;
      break;
    }
  }

  return answer;
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('1a234a'));
console.log(solution('12345'));
