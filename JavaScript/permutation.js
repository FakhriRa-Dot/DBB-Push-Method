/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari kombinasi unik dari sebuah huruf pada string

  Example Input: xyz

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function cariKataKombinasi(string) {
  // kofigurasi parameter sesuai kebutuhan anda
  let hasil = [];

  function kombinasi(sisaKata, kombinasiKata) {
    if (sisaKata.length === 0) {
      hasil.push(kombinasiKata);
      return;
    }

    for (let i = 0; i < sisaKata.length; i++) {
      let char = sisaKata[i];
      let sisaBaru = sisaKata.slice(0, i) + sisaKata.slice(i + 1);
      let kombinasiBaru = kombinasiKata + char;
      kombinasi(sisaBaru, kombinasiBaru);
    }
  }

  kombinasi(string, "");
  return [...new Set(hasil)];
}

// TEST CASE
console.log(cariKataKombinasi("abc"));
console.log(cariKataKombinasi("zzz"));
console.log(cariKataKombinasi("wow"));
console.log(cariKataKombinasi("cool"));
