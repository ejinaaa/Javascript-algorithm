// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      return a < b ? -1 : 1;
    }
    return 1;
  });
  return answer;
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
