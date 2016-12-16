function sum(num){
  var sums =[];

  sums = calculateSum(num);
  return sums.length;
}

function calculateSum(num){
  var sums = [];

  if (num <= 0) return sums;
  if (num === 1) return ['1'];
  for (var f=num; f>0; f--){
    sums.push(f.toString()+calculateSum(num-f));
  }
    
  return sums;
}