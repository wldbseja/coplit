// 문제
// 문자열을 입력받아 연속되는 문자가 있을 경우,
// 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.
// 입력
// 인자 1 : str
// string 타입의 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

function compressString(str) {
  if (str.length === 0) return ''; // 빈 문자열인 경우 빈 문자열 반환

  // 정규 표현식을 이용하여 연속되는 문자를 찾고, 해당 부분을 압축한 문자열로 치환
  return str.replace(/(.)\1{2,}/g, (match, p1) => match.length + p1);
}

let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p
