function sum(num){
  var map = {};
  
  if (num < 0) return 0;
  if (num <= 1) return 1;

  map[-1] = 0;
  map[0] = 1;
  map[1] = 1;    
  return calcSum(map,num);
}

function calcSum(map,num){
  var k1, k2, 
      result = 0 ;
   
  for (var f = 1; f<=num; f++) {    
    k1 = num - (f*(3*f-1)/2);    
    k1 = setMapValue(map,k1,num);
    
    k2 = num - (f*(3*f+1)/2);    
    k2 = setMapValue(map,k2,num);

    result += Math.pow (-1,f+1) * (map[k1] + map[k2]);
  }
  return result;
}

function setMapValue (map, k, num){    
    if (k < 0) {
      k=-1;
    }
    if (!map[k]){
      map[k] = calcSum(map,k);
    } 
    return k;   
}

/*if (k1 < 0) {
      k1=-1;
    }
    if (!map[k1]){
      map[k1] = calcSum(map,k1);
    }*/