# basic-js

#### lengkapi tutorial dari youtube
[Javascipt Lanjutan](https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=1)

  
### cara membuat objek literal pada javascript
1 membuat objek literal

// di dalam objek selalau ada properti (dalam hal ini nama, energi) dan method
// method adalah function yang ada di dalam objek
// kalau properti isinya nilai, kalau method itu isinyta function (function makan)
// dengan menggunakan string literal kita bisa langsung ambil properti atau variablenya dengan--
// menambah dengan ${}
// coba jalankan di browser

```Javascript
let mahasiswa1 = {
     nama: 'agus',
     energi: 10,
     makan: function(porsi){
         this.energi = this.energi + porsi
         console.log(`selamat datang ${this.nama}, selamat makan`)
     }
}
```

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

semua kode di atas di coba di code pen

