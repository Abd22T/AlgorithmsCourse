let n = 10n;

let fact = 1n;

while (n <= 100n) {
  console.time();
  let i = n;
  while (i >= 1) {
    fact = fact * i;
    i--;
  }
  console.log(fact + " " + n);
  fact = 1n;
  console.timeEnd();
  n += 5n;
}
