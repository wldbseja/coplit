// 문제
// 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.
// 입력
// 인자 1 : num1
// number 타입의 정수 (num1 >= 0)
// 인자 2 : num2
// number 타입의 정수 (num2 >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 어떤 수로 나누어도 나머지가 0입니다.
// 어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.

function modulo(num1, num2) {
  // num2가 0이라면 num1이 10이라고 할 때 , 10을 0으로 나누는 것과 마찬가지이므로,
  // 그 어떤 수도 0으로 나눌 수 없다.
  // 따라서, 문제에 따라 'Error: cannot divide by zero' 리턴
  // 또한,미리 이 조건문을 위에 위치한 이유는 굳이 밑에 로직이 돌아갈 필요가 없기 때문
  if (num2 === 0) {
    return 'Error: cannot divide by zero';
  }
  // 반복문의 이용해서 나눗셈을 뺄셈을 이용하여 num1이 num2보다 값이 같거나 작아지면 반복문을 종료한다.
  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  // num1의 값을 계속 갱신하여 나머지 값을 만들고 있기 때문에 num1을 리턴한다.
  return num1;
}

let output = modulo(25, 4);
console.log(output); // --> 1
