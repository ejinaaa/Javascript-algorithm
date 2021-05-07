// 완주하지 못한 선수

function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    const value = completion[i];
    const index = participant.indexOf(value);
    if (participant.includes(value)) {
      participant.splice(index, 1);
    }
  }

  return participant[0];
}

console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
