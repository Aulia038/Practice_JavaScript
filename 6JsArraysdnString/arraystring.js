// ada sebuah antrian pembeli yaitu ray, fiki, fadhilla, farah

// datang 1 pembeli yaitu nabila
// datang 2 pembeli yaitu maza dan elsi

// antrian terakhir tidak jadi antri dan pulang ke rumah

// antrian pertama sudah mendapatkan belanjaannya

// antrian kedua juga sudah mendapatkan belanjaannya

// datang pembeli baru yang nyerobot antrian yaitu tomi

// maka hasil akhirnya yaitu ...

let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
// datang nabila
antrian.push("Nabila");
// datang maza dan elsi
antrian.push("Maza", "Elsi");
// antrian terakhir pulang
antrian.pop(); // kosong karena pop menghapus elemen terakhir dari array.

//pertama dan kedua sudah mendapat belanjaan jdi menggunakan 2 shift untuk menghapus
antrian.shift(); //Menghapus elemen pertama dari array.
antrian.shift(); //Menghapus elemen kedua dari array.

antrian.splice(0, 0, "Tomi"); //menyisipkan "Tomi" di posisi pertama tanpa menghapus elemen lain di array

console.log(antrian);
