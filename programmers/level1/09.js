// 문자열 내 p와 y의 개수

function solution(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));

function solution2(s) {
  return s.split(/p/i).length === s.split(/y/i).length;
}

console.log(solution2('pPoooyY'));
console.log(solution2('Pyy'));
