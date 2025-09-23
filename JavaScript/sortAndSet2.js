/* 
  Author: zikrimansyursyah
  
  Case : 
  - terdapat sejumlah data calon mahasiswa (pendaftar) yang telah di deklarasikan pada variabel pendaftar
  - kemudian terdapat 3 zona dengan urutan A, B, dan C
  - tugas anda adalah menentukan zona dari score pendaftar, semakin tinggi scorenya maka semakin tinggi juga zona yang akan ditentukan untuknya
  - namun setiap zona hanya dapat diisi oleh 4 orang, alias jika zona tersebut sudah terisi maksimal maka pendaftar akan masuk ke zona selanjutnya
  - dan jika ternyata semua zona sudah penuh maka siswa yang tersisa akan dianggap tidak lolos
  - dan juga tentukan juga pendaftar mana saja yang lolos dan yang tidak lolos

  Example Input: (pada variabel pendaftar)
  Expected Output: 
  {
    "pendaftar_lulus": [
      { name: 'Joko', score: 94 },
      { name: 'Citra', score: 92 },
      { name: 'Lia', score: 89 },
      { name: 'Fika', score: 88 },
      { name: 'Andi', score: 85 },
      { name: 'Oscar', score: 83 },
      { name: 'Hendra', score: 81 },
      { name: 'Dewi', score: 78 },
      { name: 'Nanda', score: 77 },
      { name: 'Gita', score: 75 },
      { name: 'Krisna', score: 72 },
      { name: 'Budi', score: 70 }
    ],
    "pendaftar_tidak_lulus": [
      { name: 'Indra', score: 67 },
      { name: 'Mira', score: 63 },
      { name: 'Eko', score: 60 }
    ],
    "zona": {
      "A": ['Joko', 'Citra', 'Lia', 'Fika'],
      "B": ['Andi', 'Oscar', 'Hendra', 'Dewi'],
      "C": ['Nanda', 'Gita', 'Krisna', 'Budi'],
    }
  }

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .sort() .filter() dll
  - tampikan expected output dengan console.log()
*/

function tentukanKelulusan(data) {
  // parameter isi sesuai kebutuhan
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].score < data[j + 1].score) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  let zona = {
    A: [],
    B: [],
    C: [],
  };

  let lulus = [];
  let tidakLulus = [];

  for (let i = 0; i < data.length; i++) {
    if (zona.A.length < 4) {
      zona.A.push(data[i].name);
      lulus.push(data[i]);
    } else if (zona.B.length < 4) {
      zona.B.push(data[i].name);
      lulus.push(data[i]);
    } else if (zona.C.length < 4) {
      zona.C.push(data[i].name);
      lulus.push(data[i]);
    } else {
      tidakLulus.push(data[i]);
    }
  }
  return {
    pendaftar_lulus: lulus,
    pendaftar_tidak_lulus: tidakLulus,
    zona: zona,
  };
}

// CASE VALUE
const pendaftar = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 70 },
  { name: "Citra", score: 92 },
  { name: "Dewi", score: 78 },
  { name: "Eko", score: 60 },
  { name: "Fika", score: 88 },
  { name: "Gita", score: 75 },
  { name: "Hendra", score: 81 },
  { name: "Indra", score: 67 },
  { name: "Joko", score: 94 },
  { name: "Krisna", score: 72 },
  { name: "Lia", score: 89 },
  { name: "Mira", score: 63 },
  { name: "Nanda", score: 77 },
  { name: "Oscar", score: 83 },
];

// TEST CASE
console.log(tentukanKelulusan(pendaftar));
