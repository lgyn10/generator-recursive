// 1. 반복문
function* perm(length: number) {
  const map = new Map();
  map.set('0', 'a');
  map.set('1', 'b');
  let n = 0;
  while (n < 2 ** length) {
    yield [...n.toString(2).padStart(length, '0')].map((v) => map.get(v)).join('');
    n++;
  }
}

console.log(`1. 반복문을 활용한 제너레이터`);
const gen = perm(3);
for (const value of gen) {
  console.log(value);
}
