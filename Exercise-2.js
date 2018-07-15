var string = 'Hello World!';


var splitted = string.split('');
var reversed = [''];
  

function balikString(){
  for (i=splitted.length-1;i>=0;i--){
   reversed.push([splitted[i]]);
    //console.log(reversed.push(splitted[i]));
    
    
  }
 
  //console.log(splitted);
// console.log(splitted.join(''));
  
  
  console.log(reversed.join(['']));
}



balikString();
