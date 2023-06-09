function solution(n, k) {
  return 12000 * n + 2000 * k - 2000 * Math.floor(n / 10);
}

// 다른 풀이법
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
