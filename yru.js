<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Animal Variable</title> 
</head>
<body>

<script>
  // Deklarasi variabel animal menggunakan let
  let animal;

   // tipe data
   let namagw = "zainuri"
let umurSaya = 17;

// operator js 
const penjumlahan = 10 + 5
const modulus = penjumlahan % 4
const pangkat = modulus ** 3

// assignment js 
let umur = 10;
umur += 5;

// string 
let kalimat = 'Hello ';
kalimat += "World";

// fungsi 
function namaSaya() {
    return "Selamat Pagi!";
  }
  
  console.log(namaSaya());
  
  let berkenalan = function() {
    return "Hallo, nama saya Sarah.";
  };
  
  console.log(berkenalan());
  
  // parameter 
  function namayada() {
    return "Selamat Pagi!";
  }
  
  console.log(namayada());
  
  let bilek = function() {
    return "Hallo, nama saya Sarah.";
  };
  
  console.log(bilek());
  
  // objek 
  let saya = new Object();
saya.nama = 'sarah';
saya.umur = 24;

// property 
let manusia = {
    kepala: true,
    badan: true,
    tangan: true
  };
  
  manusia.ekor = false;
  
  console.log(manusia);
  
  // delete object 
  let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
};
delete tubuh.roda;


// objek method 
let kucing = {
    lucu: true,
    kaki: 4,
    suara: function() {
      return 'Meong';
    }
  };

  // array 
  let hewan = ['kucing', 'buaya', 'pepaya']

  // array data 
  let warna = ['hitam', 'merah', 'ungu', 'kuning'];

warna[3] = 'biru';

// objek math 
let bilangan = 0;

let pow = Math.pow(bilangan, 2);
let sqrt = Math.sqrt(36 + bilangan);

bilangan = Math.pow(Math.ceil(sqrt), 2);

let max = Math.max(bilangan, 2.3, 8.5);

bilangan = Math.ceil(max);

// perulangan 
function ganjilGenap(platNomor) {
    if (platNomor % 2 === 1) {
      return "Ganjil";
    } else {
      return "Genap";
    }
  }
  
  let plat1 = 123;
  let plat2 = 246;
  
  // forloop 
  let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 0) {
    genap.push(angka[i]);
  }
}

// for or loop 
let anda = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

for (const num of angka) {
  if (num % 2 === 1) {
    ganjil.push(num);
  }
}

// while loop
let anada = [];

let i = 5;
while (i >= 0) {
  angka.push(i);
  i--;
}

// do while loop 
let king = [];
let pa = 5;

do {
  angka.push(i);
  i++;
} while (i < 11);

// default parameter 
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
}

let hasil = warnaKesukaan();

// rest parameter 
const namaBuah1 = ["apel", "mangga"];
const namaBuah2 = ["sirsak", "semangka"];

const semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah);
console.log(hasil);

hasil = warnaKesukaan("biru");
console.log(hasil);
console.log(king); 
console.log(pa);
console.log(anada);
console.log(ganjil);
console.log(anda);
console.log(genap);
console.log(angka);
console.log(ganjilGenap(plat1));
console.log(ganjilGenap(plat2));  
console.log(bilangan);
console.log(warna);
console.log(hewan);
console.log(kucing);
console.log(kalimat);
console.log (umurSaya);
console.log (penjumlahan);
console.log (modulus);
console.log (pangkat);
console.log (umur);
console.log (kalimat);
console.log (saya.nama, saya.umur);

</script>






</body>
</html>
