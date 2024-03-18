// 2. 재귀 호출
// function perm2(length: number, n?: number): Generator
function* perm2(length: number, n = 0): Generator {
  const map = new Map();
  map.set('0', 'a');
  map.set('1', 'b');
  yield [...n.toString(2).padStart(length, '0')].map((v) => map.get(v)).join('');
  if (n === 2 ** length - 1) return;
  yield* perm2(length, n + 1);
}

console.log(`\n2. 재귀 호출을 활용한 제너레이터`);
const gen2 = perm2(3);
for (const value of gen2) {
  console.log(value);
}