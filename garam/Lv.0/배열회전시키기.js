// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// left면 shift로 맨앞 요소를 삭제, push로 맨 뒤에 추가
// right면 pop으로 맨끝 요소를 삭제, unshift로 맨 앞에 추가

function solution(numbers, direction) {
    if (direction === 'left') {
      const firstElement = numbers.shift();
      numbers.push(firstElement);
    } else if (direction === 'right') {
      const lastElement = numbers.pop();
      numbers.unshift(lastElement);
    }
  
    return numbers;
  }
  