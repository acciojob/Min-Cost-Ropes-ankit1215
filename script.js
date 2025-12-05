function mincost(arr)
{ 
  if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
   
    let a = arr.shift();
    let b = arr.shift();

    let sum = a + b;
    cost += sum;

    let i = 0;
    while (i < arr.length && arr[i] < sum) i++;
    arr.splice(i, 0, sum);
  }

  return cost;
}

module.exports = mincost;
