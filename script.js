// cara membuat objek literal pada javascript
//. 1 membuat objek literal

// di dalam objek selalau ada properti (dalam hal ini nama, energi) dan method
// method adalah function yang ada di dalam objek
// kalau properti isinya nilai, kalau method itu isinyta function (function makan)
// dengan menggunakan string literal kita bisa langsung ambil properti atau variablenya dengan--
// menambah dengan ${}
// coba jalankan di browser
// let mahasiswa1 = {
//     nama: 'agus',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi
//         console.log(`selamat datang ${this.nama}, selamat makan`)
//     }
// }

// di console log ditulis :
//mahasiswa.makan(2) -- maka otomatis energi menjadi 12
// untuk membuat instansiasi objek literal berikutnya kita nama variabel-nya tidak boleh sama.
// jadi namanya harus beda
// misal

// let mahasiswa1 = {
//     nama: 'agus',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi
//         console.log(`selamat datang ${this.nama}, selamat makan`)
//     }
// }

// 2. funtion Declaration
// dengan cara ini kita tidak perlu membuat duplikat dari objeknya
// kita tinggal manggil / intansiasi yang berulang kali
// jadi kita bikin template-nya
// di dalamnya ada objek tapi kosong, nanti diisi 
// kalau mau membuat method tinggal bikin function di bawahnya
// this.enegi += porsi; ===> this.energi = this.energi + porsi

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi; 

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
//     return mahasiswa; // kalau mau pakai function declaration harus ada return objeknya supaya tdk undifined
// }
// kode di atas kalau dijalankan yang tampil adalah function-nya
// coba ketik mahasiswa di inspect console-nya 
// ketik agus di console akan undifine

// let agus = Mahasiswa('agus', 10);

// kalau mau membaut mahasiswa berikutnya, tinggal instanssiasi, ga perlu bikin template baru lagi

// let dodi = Mahasiswa('dodi', 20);

// misal kita ingin tambahkan satu metode lagi, misal main bisa mengurangi energi

// 3. Constuctur Function
// apa bedanya? kita tidak perlu menulis deklarasi variable dan return, ==
//krn otomatis dibuat oleh javascript
// variabel mahasisa diganti this, return dihapus

function Mahasiswa(nama, energi){
   
    this.nama = nama;
    this.energi = energi; 

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
   
}

// sekrang cara manggil dengan menambahkan kata 'new'
// krn kalo tidak, kita akan disangka instansiasi function declaration==
// yang akan mencari return, dan mencari variabel 
let agus = new Mahasiswa('agus', 10);





