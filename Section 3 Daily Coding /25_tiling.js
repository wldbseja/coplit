// 문제
// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다.
// 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------

2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/

function tiling(n) {
  // 보드를 채우는 경우의 수를 저장할 배열을 생성합니다.
  const memo = [1, 2];
  // memo 배열의 크기가 n 이상이 될 때까지 보드를 채우는 경우의 수를 계산합니다.
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  // memo 배열의 마지막 값을 반환합니다.
  return memo[n - 1];
}

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
