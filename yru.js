// mendeklarasikan variabel
let animal;

// Tipe data 
var namaSaya = "akbar"
var umurSaya = 18

// Operator aritmatika 
const penjumlahan = 10 + 5
const modulus = penjumlahan % 4
const pangkat = modulus ** 3

// Assignment operator 
let umur = 10;
umur +=5;
console.log(umur);

// String operator 
let kalimat = 'Hello ';
kalimat += 'world';
console.log(kalimat);

// mendeklarasikan fungsi 
function namaSaya() {
    return "Selamat Pagi!";
  }
  console.log(namaSaya()); 
  let berkenalan = function() {
    return "Hallo, nama saya Sarah.";
  };
  console.log(berkenalan()); 

// parameter dan argument 
function luasPersegi(s) {
    return s * s;
  }
  const luas = luasPersegi(5);
  console.log(luas); // 25

//   menggunakan object literal 
let saya = new Object();

saya.nama = 'sarah';
saya.umur = 24;

// dot notation 
let manusia = {
    kepala: true,
    badan: true,
    tangan: true,
   
  };
   manusia.ekor = false
  console.log(manusia);

//   menghapus properti objek 
let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
};
delete tubuh.roda;

// object method 
let kucing = {
    lucu: true,
    kaki: 4,
  };
  
  Object.defineProperty(kucing, "suara", {
    value: function() {
      return "Meong";
    },
  });
  
  console.log(kucing.suara()); // Meong 

//   mendeklarasikan array 
let hewan = new Array( 'burung hantu', 'gajah', 'laba laba');
  
//   mengubah data/element pada array 
let warna = ['hitam', 'merah', 'ungu', 'kuning'];
warna[3] = 'biru';
console.log(warna);

// method objek math 
let bilangan = 100;

let pow = Math.pow(bilangan, 2);
let sqrt = Math.sqrt(bilangan, 40);
let max = Math.max(bilangan, 2.3, 8.5);

// menggunakn if, else if dan else
function ganjilGenap(platNomor) {
    if (platNomor % 2 === 1) {
      return "Ganjil";
    } else {
      return "Genap";
    }
  }
  
  // Contoh penggunaan fungsi
  let plat1 = 123;
  let plat2 = 246;
  
  console.log(ganjilGenap(plat1)); // Output: "Ganjil"
  console.log(ganjilGenap(plat2)); // Output: "Genap"
  
//   for loop 
let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

// 1. Push angka-angka genap dari variabel angka ke dalam variabel genap dengan menggunakan for loop
for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 0) {
    genap.push(angka[i]);
  }
}

// 2. Variabel genap harus berisi [46, 12, 54]
console.log(genap); // Output: [46, 12, 54]

// 3. Jangan ubah variabel angka
console.log(angka); // Output: [1, 46, 75, 12, 89, 54, 101]

// for/ of loop 
// let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

// 1. Push angka-angka ganjil dari variabel angka ke dalam variabel ganjil dengan menggunakan for...of loop
for (const num of angka) {
  if (num % 2 === 1) {
    ganjil.push(num);
  }
}

// 2. Variabel ganjil harus berisi [1, 75, 89, 101]
console.log(ganjil); // Output: [1, 75, 89, 101]

// 3. Jangan ubah variabel angka
console.log(angka); // Output: [1, 46, 75, 12, 89, 54, 101]

// while loop 
// let angka = [];

// 1. Masukkan angka 5 sampai 0 dengan urutan menurun ke dalam array angka menggunakan while loop
let i = 5;
while (i >= 0) {
  angka.push(i);
  i--;
}

// 2. Variabel angka harus sama dengan [5, 4, 3, 2, 1, 0]
console.log(angka); // Output: [5, 4, 3, 2, 1, 0]

// do while loop 
// let angka = [];
// let i = 5;

// 1. Ubah while menjadi do...while sehingga dapat melakukan perulangan untuk memasukkan nilai i ke dalam variabel angka. Loop akan berhenti jika variabel i bernilai 11
do {
  angka.push(i);
  i++;
} while (i < 11);

// 2. Variable angka harus sama dengan [5, 6, 7, 8, 9, 10]
console.log(angka); // Output: [5, 6, 7, 8, 9, 10]

// 3. Variable i harus sama dengan 11
console.log(i); // Output: 11

// default parameter 
function warnaKesukaan(warna = "putih"){
    return "Warna kesukaan saya adalah" + warna;
}
console.log(warnaKesukaan());

// rest parameter dan spread operator 
const namaBuah1 = ["apel", "mangga"];
const namaBuah2 = ["sirsak", "semangka"];

const semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah);  // Output: ["apel", "mangga", "sirsak", "semangka"]
