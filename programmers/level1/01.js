// 수박수박수박수박수박수?

function solution(n) {
  const text = ['수', '박'];
  let answer = '';

  for (let i = 0; i < n; i++) {
    answer += text[i % 2];
  }

  return answer;
}

console.log(solution(4));
