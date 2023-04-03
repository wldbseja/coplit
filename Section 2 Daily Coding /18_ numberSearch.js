// 문제
// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을
// (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.
// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// number 타입을 리턴해야 합니다 (0 이상의 정수)
// 주의 사항
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.

function numberSearch(str) {
  // 정규식을 이용하여 숫자만 체크할 수 있는 수식을 변수에 저장
  const regex = /[0-9]/;
  // str 문자열에 공백을 없애고 다시 join 해줌
  str = str.split(' ').join('');
  // str 문자열의 길이가 0이면 0을 리턴
  if (str.length === 0) return 0;

  let sum = 0;
  let newStr = '';
  for (item of str) {
    // test를 이용하여 확인하려는 문자가 숫자인지 판별하여 불리언 값이 true 이면 sum 변수에 숫자들을 계속 합해줌
    if (regex.test(item)) sum += Number(item);
    // 숫자가 아니라면 newStr변수에 문자들을 추가적으로 더해줌
    else newStr += item;
  }
  // 완성된 newStr의 길이를 len 변수에 저장
  const len = newStr.length;
  // Math.round를 이용하여 sum을 len으로 나눈 값을 정수로 반올림 처리하여 리턴
  return Math.round(sum / len);
}

let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2
