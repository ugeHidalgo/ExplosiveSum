function sum(num){
  var k1, k2, 
      result = 0 ;

  if (num < 0) return 0;
  if (num <= 1) return 1;
  for (var f = 1; f<=num; f++) {
    k1 = f*(3*f-1)/2;
    k2 = f*(3*f+1)/2;
    result += Math.pow (-1,f+1) * (sum(num-k1) + sum(num-k2));
  }
  return result;
}