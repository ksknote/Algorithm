function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === "<") {
        if (eq ==='=') {
            return Number(n <= m)
        } else {
            return Number(n < m)
        }
    } else {
                if (eq ==='=') {
            return Number(n >= m)
        } else {
            return Number(n > m)
        }
    }
}