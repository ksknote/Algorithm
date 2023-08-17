def solution(k, m, score):
    answer = 0
    score.sort(reverse =True)
    length = len(score)//m
    for i in range(1, length+1):
        answer = answer+ m*(score[m*i -1])
    return answer