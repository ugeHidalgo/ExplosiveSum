function sum(num){
  var sums =[], finalSums = [];

  sums = calculateSum(num);
  finalSums = removeDuplicateds(sums);
  console.log (num + ':' + finalSums);
  return finalSums.length;
}

function calculateSum(num){
  var sums = [], auxSums = [];

  if (num <= 0) return sums;
  if (num === 1) return ['1'];
  sums.push(num.toString());
  for (var f=num; f>0; f--){
    auxSums = calculateSum(num-f);
    auxSums.forEach(function(auxSum){
      sums.push(f.toString()+auxSum);
    });
  } 
  return sums;
}

function removeDuplicateds(sums){
  var result = [], 
      temp = [],
      aux;
  sums.forEach(function(sum){
    aux = sum.split('').sort().join('');
    temp.push(aux);
  });
  temp.sort();
  for (var f=0; f<temp.length; f++)
  {
    if (temp[f]!==temp[f+1]){
      result.push(temp[f]);
    }
  }

  return result;
};