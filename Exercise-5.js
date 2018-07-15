var kata = 'katak';


function palindrome(kata) {

  
 //console.log(kata) ;
  
  var splitted = kata.split('');
  
  //console.log(splitted);  
  
  var reversed = splitted.reverse();
  
  //console.log(reversed);
  
  var joinned = reversed.join('');
  
  //console.log(joinned);
  
  if(joinned == kata){
    return true;
  }
  else {
    return false;
  }
  
} 

palindrome(kata);  
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false