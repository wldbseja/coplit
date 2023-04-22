// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

const isSubsetOf = function (base, sample) {
  const baseSet = new Set(base); // base 배열을 Set으로 변환

  for (let i = 0; i < sample.length; i++) {
    if (!baseSet.has(sample[i])) {
      // sample 배열의 요소가 baseSet에 없으면 false 반환
      return false;
    }
  }

  return true; // sample 배열의 모든 요소가 baseSet에 존재하면 true 반환
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true
