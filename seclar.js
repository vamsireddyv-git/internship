function secondLargest(arr)
 {
  let largest = -Infinity;
  let second = -Infinity;
  for (let num of arr) 
    {
    if (num > largest)
    {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) 
        {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}
console.log(secondLargest([1, 2]));
