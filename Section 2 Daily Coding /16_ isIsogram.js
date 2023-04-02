// 문제
// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다.
// 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.
// 입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

function isIsogram(str) {
  const obj = {};
  // 대소문자 구분이 없으므로 대문자로 모두 변경
  str = str.toUpperCase();
  for (item of str) {
    // obj 객체에 알파벳이 들어가 있는게 없으면 키는 알파벳 ,값은 초기값 0 으로 설정
    if (!obj[item]) obj[item] = 0;
    // 등장할 때 마다 하나씩 값을 올린다
    obj[item]++;
  }
  // max 변수에 obj의 모든 값들 중 제일 큰 값을 찾아 저장
  const max = Math.max(...Object.values(obj));
  // 알파벳이 중복된다면 max 값은 2가 되므로, 1보다 크다면 false를 리턴
  if (max > 1) return false;
  // 중복되는 값이 없다면 true를 리턴
  return true;
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false
