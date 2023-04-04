// 문제
// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다.
// 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.
// 'hello'를 secret 3으로 암호화한 경우: 'khoor'
// 'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'
// 입력
// 인자 1 : str
// string 타입의 알파벳 소문자 문자열
// 인자 2 : secret
// number 타입의 암호화 키
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 공백은 그대로 두어야 합니다.

function decryptCaesarCipher(str, secret) {
  // 빈 문자열인 경우 빈 문자열을 반환
  if (str.length === 0) {
    return '';
  }
  // 주어진 문자열의 각 문자를 순회하며 변환
  let decrypted = '';
  for (let i = 0; i < str.length; i++) {
    // 공백인 경우 그대로 반환하여 decrypted 변수에 더해줌
    if (str[i] === ' ') {
      decrypted += ' ';
      continue;
    }
    // 알파벳을 숫자로 변환
    const charCode = str.charCodeAt(i) - 97;
    // secret 값만큼 왼쪽으로 이동
    const shifted = (charCode - secret) % 26;
    const shiftedCharCode = shifted >= 0 ? shifted + 97 : shifted + 123;
    // 공백이 아닐 경우 변환한 숫자를 다시 알파벳으로 변환하여 decrypted 변수에 더해줌
    decrypted += String.fromCharCode(shiftedCharCode);
  }
  return decrypted;
}

let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world
