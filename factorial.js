function factorial(n)
{
  let number = n;
  let fact = 1;
  
  for(let i =1; i<=number;i++)
  {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
