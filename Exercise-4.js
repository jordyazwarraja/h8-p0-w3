var input;


function dataHandling2() {
  
  input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  
  
  
  input.splice(1,1,'Roman Alamsyah Elsharawy');
  input.splice(4,0,'Pria');
  input.splice(5,1, 'SMA Internasional Metro');
  
  console.log(input);
  
  var irisan1 = input.slice (3,4);
  console.log(irisan1);
 
  
  var irisan1String = irisan1 + '';
  
  console.log(irisan1String);
  
  var splitted = irisan1String.split('/');
  
  
  console.log(splitted);
  
  var bulan = splitted.slice (1,2);
  
  console.log(bulan);
  
  var angkaBulan = Number(bulan);
  console.log(angkaBulan);
  
  switch(angkaBulan) {
      
    case 1 : {console.log('Januari'); break;}
      case 2: {console.log('Februari'); break;}
      case 3: {console.log('Maret'); break;}
      case 4: {console.log('April'); break;}
      case 5: {console.log('Mei'); break;}
      case 6: {console.log('Juni'); break;}
      case 7: {console.log('Juli'); break;}
      case 8: {console.log('Agustus'); break;}
      case 9: {console.log('September'); break;}
    case 10: {console.log('Oktober'); break;}
    case 11: {console.log('November'); break;}
    case 12: {console.log('Desember'); break;}
    default : {console.log('')};
    
  }
  
  var urutan = splitted.sort(function(a,b) { return b-a});
  console.log(urutan);
  
  var gabung = splitted.join('-');
  console.log(gabung);
  
  
  var irisanNama = input.slice(1,2);
  console.log(irisanNama);
  
  var stringNama = irisanNama +'';
  
  console.log(stringNama);
  
  var sliceNama = stringNama.slice(0,14);
  
  console.log(sliceNama);
  
}


dataHandling2();