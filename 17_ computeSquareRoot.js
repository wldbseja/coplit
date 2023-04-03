// 문제
// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.
// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)
// 출력
// number 타입을 리턴해야 합니다.
// 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
// 주의 사항
// Math.sqrt 사용은 금지됩니다.

function computeSquareRoot(num) {
  let approx = num / 2; // 초기 근사값은 num / 2로 설정
  let prevApprox; // 이전 근사값을 저장하기 위한 변수

  while (true) {
    // 이전 근사값과 현재 근사값의 차이가 0.01보다 작아지면 루프를 종료
    if (prevApprox && Math.abs(approx - prevApprox) < 0.01) {
      break;
    }
    prevApprox = approx; // 이전 근사값 갱신
    approx = (approx + num / approx) / 2; // 새로운 근사값 계산
  }

  // 최종 근사값을 소수점 둘째 자리까지 반올림한 후 반환
  return parseFloat(approx.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45
