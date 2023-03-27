// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.
// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// arr[i].length는 20 이하
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

function removeExtremes(arr) {
  let min = 20;
  let max = 0;
  let minIdx = 0;
  let maxIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    let strLen = arr[i].length;
    // arr 배열 요소의 문자열 길이가 min보다 같거나 작으면
    // min을 작은 순으로 계속 갱신하고 minIdx에 인덱스값도 저장
    if (strLen <= min) {
      min = strLen;
      minIdx = i;
    }
    // arr 배열 요소의 문자열 길이가 max보다 같거나 크면
    // max를 문자열 길이 큰 순으로 계속 갱신하고 maxIdx에 인덱스값도 저장
    if (strLen >= max) {
      max = strLen;
      maxIdx = i;
    }
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 짧은 문자열 또는 긴 문자열의 인덱스가 아닐 때 result 배열에 문자열을 넣어줌
    if (i !== minIdx && i !== maxIdx) {
      result.push(arr[i]);
    }
  }
  return result;
}

let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output);
