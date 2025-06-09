const numeroPrimo = () => {
  let num = parseInt(document.getElementById('num').value);
  let divisor = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisor++;
    }
  }

  const result = document.getElementById('result');

  if (divisor == 2) {
    result.innerHTML = `Número <strong>${num}</strong> é primo`;
  } else {
    result.innerHTML = `Número <strong>${num}</strong>  não é primo`;
  }
};
