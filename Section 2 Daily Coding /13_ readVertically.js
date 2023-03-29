// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.
// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

function readVertically(arr) {
  let strArr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    // str 변수에 arr 배열의 문자열 요소를 넣어서 두번째 포문이 돌 때 요소의 길이를 기준으로 하나씩 순회한다.
    for (let j = 0; j < str.length; j++) {
      // strArr 배열 길이가 j랑 같을 때 strArr 배열의 인덱스에 맞게 문자를 넣는다.
      if (strArr.length === j) {
        strArr.push(str[j]);
        // strArr 배열 길이가 j랑 다를 때는 strArr에 하나씩 들어가있는 요소에 str[j]를 더해준다.
      } else {
        strArr[j] = strArr[j] + str[j];
      }
    }
  }
  // 문자열을 리턴해야하므로 strArr 배열을 join 해서 리턴
  return strArr.join('');
}

// arr 배열 요소가  'hello', 'wolrd' 일 때
// str에 arr[i]를 넣으면 두번째 포문은 처음에 hello의 길이로 시작되고 str[j]는 h,e,l,l,o 가 됨
// 처음 조건문 strArr길이와 j가 같을 때 : strArr 배열에 h,e,l,l,o 순서대로 들어감
// 두번째 포문이 끝나고 첫번째 포문에서 hello가 끝났으니까 wolrd가 됨
// str은 wolrd가 되고 두번째 포문이 시작됨 str[j]는 w,o,l,r,d가 되고 j는 리셋되서 0 부터 다시 시작됨
// strArr 배열 길이는 h,e,l,l,o 요소가 5개 들어있으니까 길이가 5가 되므로 j랑 맞지 않기 때문에 첫번째 조건문이 돌지 않고
// eles로 들어가서 strArr[j] 즉 인덱스 0부터 str[j]를 더해줌
// ex) strArr[0] -> h 요소에 ,str[0] -> w 를 더해줌
// 이걸 반복 해서 다 돌았을 때 배열을 join 해서 문자열로 만들어줌

let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

//   input = [
//     //
//     'hi',
//     'wolrd',
//   ];
//   output = readVertically(input);
//   console.log(output); // --> 'hwiolrd'
