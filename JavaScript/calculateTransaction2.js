/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total pendapatan, produk terlaris, dan rata-rata harga produk

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Pendapatan:  5500000
  - Produk Terlaris : Baju
  - Rata-rata Harga Produk : 175000

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function totalPendapatan(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    total += transactions[i].jumlah * transactions[i].harga;
  }
  return total;
}

function produkTerlaris(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  let produkCount = {};

  for (let i = 0; i < transactions.length; i++) {
    let produk = transactions[i].produk;
    let jumlah = transactions[i].jumlah;

    produkCount[produk] = (produkCount[produk] || 0) + jumlah;
  }

  let maxProduk = null;
  let maxJumlah = 0;

  for (let p in produkCount) {
    if (produkCount[p] > maxJumlah) {
      maxJumlah = produkCount[p];
      maxProduk = p;
    }
  }

  return maxProduk;
}

function rataRataHarga(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  let totalHarga = 0;
  let count = 0;

  for (let i = 0; i < transactions.length; i++) {
    totalHarga += transactions[i].harga;
    count++;
  }

  const rataRata = totalHarga / count;

  return rataRata;
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", produk: "Baju", jumlah: 5, harga: 150000 },
  { tanggal: "2023-01-10", produk: "Celana", jumlah: 3, harga: 200000 },
  { tanggal: "2023-02-15", produk: "Baju", jumlah: 2, harga: 150000 },
  { tanggal: "2023-03-20", produk: "Sepatu", jumlah: 4, harga: 300000 },
  { tanggal: "2023-03-22", produk: "Topi", jumlah: 6, harga: 50000 },
  { tanggal: "2023-04-10", produk: "Celana", jumlah: 2, harga: 200000 },
  { tanggal: "2023-04-15", produk: "Baju", jumlah: 3, harga: 150000 },
  { tanggal: "2023-05-05", produk: "Sepatu", jumlah: 1, harga: 300000 },
  { tanggal: "2023-05-10", produk: "Topi", jumlah: 4, harga: 50000 },
  { tanggal: "2023-06-15", produk: "Celana", jumlah: 5, harga: 200000 },
];

// TEST CASE
console.log("Total Saldo Akhir :", totalPendapatan(transactions));
console.log("Transaksi Terbanyak :", produkTerlaris(transactions));
console.log(
  "Total Transaksi Januari :",
  rataRataHarga(transactions, "Januari")
);
