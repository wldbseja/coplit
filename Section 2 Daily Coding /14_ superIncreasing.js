// 문제
// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
// 입력
// 인자 1 : arr
// 수를 요소로 갖는 배열
// arr[i]는 정수
// 출력
// boolean 타입을 리턴해야 합니다.
// arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

// 풀이
// 변수 num에 arr배열의 요소를 하나씩 더해준다.
// num이 arr 배열의 인덱스 1까지 더해졌을때
// num이 arr배열의 인덱스 2의 요소보다 크거나 같다면 false 리턴
// 그게아니라면 포문을 빠져나왔을 때 true 리턴

function superIncreasing(arr) {
  let num = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    num += arr[i];
    if (i > 1 && num >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false
