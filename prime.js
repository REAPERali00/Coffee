const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  const input = prompt("Enter a number");
  const result = find_Factors(Number(input));
  if (result.length <= 2) {
    console.log("prime number");
  }

  console.log(result);
});
function find_Factors(num) {
  let factors = [];

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  factors.push(num);

  return factors;
}
