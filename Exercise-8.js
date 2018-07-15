function pasanganTerbesar(num) {
  
  
 
stringNum = num.toString();
 
var kumpulanPasangan = []; 
  for (i=0; i<=stringNum.length-1; i++){
      
   
    //console.log(stringNum.slice(i,i+2));
    
  var pasangan = stringNum.slice(i,i+2);
    
    
    kumpulanPasangan.push(pasangan);
    
    
  }

 //console.log(kumpulanPasangan); 
  
  var urutan =  kumpulanPasangan.sort(function(value1, value2) { return value1 < value2 });
 
  var urutanArr =  urutan.slice(0,1);
  
  return urutanArr.toString();
  
  
  
  
  
}







console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99