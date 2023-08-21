// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const answer = [];

  for (const i of arr) {

    if (i % divisor === 0) {
      answer.push(i)
    }
  }
  
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 다른 풀이: filter

function solution(arr, divisor) {
    var answer = arr.filter(v => v % divisor == 0);
    
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}