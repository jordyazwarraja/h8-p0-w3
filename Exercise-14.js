function mengelompokkanAngka(arr) {
 
  var arrGenap = [];
  var arrGanjil = [];
  var arrKelip = [];
  
  for ( i = 0; i <= arr.length-1; i ++){
    
    
    var mod = arr[i] %2;
    var  mod3 = arr[i]%3; 
   
  
     if ( mod == 0){
      arrGenap.push(arr[i]);
       }
    
    
     if ( mod !== 0 && mod3 !== 0){
      arrGanjil.push(arr[i]);
    }
    
    
    
    
      if(mod3 == 0){
        arrKelip.push(arr[i]);
      }
      
  }
  
   
  
  
  
return [arrGenap, arrGanjil, arrKelip];
    

  
  
  
  
}







console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
