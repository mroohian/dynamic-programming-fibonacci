function fib(n, prevValues = {}, level = 0) {
  const dashes = "-".repeat(level);
  console.log(`${dashes}> [${n}]: called`);

  if (prevValues[n]) {
    const prevResult = prevValues[n];
    console.log(`${dashes}> [${n}] = ${prevResult} hit`);
    return prevResult;
  }

  if (n <= 2) {
    console.log(`${dashes}> [${n}] = 1 static`);

    prevValues[n] = 1;
    return 1;
  } else {
    const result =
      fib(n - 1, prevValues, level + 1) + fib(n - 2, prevValues, level + 1);
    console.log(`${dashes}> [${n}] = ${result} calculated`);

    prevValues[n] = result;
    return result;
  }
}

console.log(fib(42));
