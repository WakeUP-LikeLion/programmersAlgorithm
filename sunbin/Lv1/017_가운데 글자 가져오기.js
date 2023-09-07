// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const index = parseInt(s.length /  2)

  if (s.length % 2 === 0) {
    return s.substring(index-1, index+1)
    
      
  } else {
    return s[index]
    
    
  }
}