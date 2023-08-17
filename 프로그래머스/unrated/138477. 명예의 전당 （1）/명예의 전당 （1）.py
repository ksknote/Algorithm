def solution(k, score):
    answer = []
    honors = []
    length = len(score)
    for i in range(length):
        print(i)
        if i < k:
            honors.append(score[i])
        else:
            honors.sort()
            if score[i] > honors[0]:
                del honors[0]
                honors.append(score[i])
        answer.append(min(honors))
    return answer