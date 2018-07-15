function tentukanDeretGeometri(arr) {
  
  var j = 1;
  var arrSelisihBagi = [];
  var jumlah = 1;
  
  
  
  for ( var i = 0; i <= arr.length-2; i++){
    
    
      var selisihBagi = arr[j] / arr[i];
      
      arrSelisihBagi.push(selisihBagi);
      //console.log(arrSelisihBagi);
      j++;
    
    
  }
  
   for (var a = 0; a <=arrSelisihBagi.length-1; a++){
      
     var  jumlah = jumlah + arrSelisihBagi[a];
    
        
      
    }
  
  var mean = Math.round(jumlah / arrSelisihBagi.length);
  //console.log(mean);
  
  if (mean == arrSelisihBagi[1]){
    
    return true;
  }
  
  
  else {
    return false;
  }
  
  
  
  
}