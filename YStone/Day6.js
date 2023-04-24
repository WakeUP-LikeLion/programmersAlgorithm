// 중복된 숫자 개수
// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 1,000
// 0 ≤ n ≤ 1,000

const solution = (array, n) => {
  const result = array.filter((num) => num === n);
  return result.length;
};

const solution = (array, n) => {
  let result = 0;
  for (const num of array) {
    if (num === n) {
      result += 1;
    }
  }
  return result;
};

// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
// 스크린샷 2022-07-07 오후 3.27.04 복사본.png

// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// dot의 길이 = 2
// dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
// -500 ≤ dot의 원소 ≤ 500
// dot의 원소는 0이 아닙니다.

const solution = (dot) => {
  if (dot[0] > 0) {
    return dot[1] > 0 ? 1 : 4;
  } else {
    return dot[1] > 0 ? 2 : 3;
  }
};

// 문자열 뒤집기
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000

const solution = (my_string) => {
  let result = "";
  for (const letter of my_string) {
    result = letter + result;
  }
  return result;
};