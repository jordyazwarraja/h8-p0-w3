function angkaPalindrome(angka) {
	var iterasi = angka + 1;

	var reversed = '';

	var strAngka = String(iterasi);

	for (var i = strAngka.length - 1; i >= 0; i--) {
		reversed = reversed + strAngka[i];
	}

	var iterasirev = Number(reversed);
	//console.log(reversed);
	//console.log(strAngka.length);
	if (iterasirev === iterasi) {
		return iterasi;
	} else {
		while (iterasirev !== iterasi) {
			iterasi++;
			reversed = '';

			strAngka = String(iterasi);

			for (var i = strAngka.length - 1; i >= 0; i--) {
				reversed = reversed + strAngka[i];
			}
			iterasirev = Number(reversed);
			if (iterasirev === iterasi) {
				return iterasi;
			}
		}

		return iterasi;
	}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001