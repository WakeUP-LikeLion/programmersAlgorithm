# https://school.programmers.co.kr/learn/courses/30/lessons/120892

def solution(cipher, code):
    answer = ''
    for i in range(code-1, len(cipher), code):
        answer += cipher[i] 

    return answer


# 다른풀이
def solution_b(cipher, code):
  return cipher[code-1::code]

solution("dfjardstddetckdaccccdegk", 4)
