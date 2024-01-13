# https://school.programmers.co.kr/learn/courses/30/lessons/120842

def solution(num_list, n):
    answer = []
    temp = []
    j = 0
    for i in num_list:
        temp.append(i)
        j += 1

        if len(temp) == n:
            answer.append(temp)
            j = 0
            temp = []

    return answer


solution([1, 2, 3, 4, 5, 6, 7, 8], 2)
