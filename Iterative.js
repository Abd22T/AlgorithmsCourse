let n = 10n;

let fact = 1n;

while (n <= 100) {
  console.time();
  for (let i = 1n; i <= n; ++i) {
    fact = fact * i;
  }
  console.log(fact + " " + n);
  fact = 1n;
  console.timeEnd();
  n += 5n;
}
