// var nama = "ican";
// var nilai = 0;

// if (nama && nilai){
//     if (nilai > 100){
//         console.log("invalid");
//     } 
//     if (nilai <= 10 && nilai >= 79){
//         console.log(nama + " nilai kamu " + nilai + "  dan Mendapatkan Nilai A");
//     } 
//     if (nilai < 80 && nilai > 64){
//         console.log(nama + " nilai kamu " + nilai + "  dan Mendapatkan Nilai B");
//     } 
//     if (nilai < 65 && nilai > 49){
//         console.log(nama + " nilai kamu " + nilai + "  dan Mendapatkan Nilai C");
//     } 
//     if (nilai < 50 && nilai > 34){
//         console.log(nama + " nilai kamu " + nilai + "  dan Mendapatkan Nilai D");
//     } 
//     if (nilai < 35 && nilai > -1){
//         console.log(nama + " nilai kamu " + nilai + "  dan Mendapatkan Nilai E");
//     } 
//     if (nilai == 0){
//         console.log("BODO");
//     } 

// }

// var nama = "ican";
// var nilai = 90;
// var absen = 9;

// if (nilai >= 70 && absen >= 5){
//     console.log(nama + " nilai kamu " + nilai + " dan Absen kamu " + absen + " Kamu dinyatakan LULUS");
//     }
//     // else if (nilai < 70 && absen < 5){
//     //     console.log(nama + " nilai kamu " + nilai + "  dan Absen kamu " + absen + " Kamu dinyatakan TIDAK LULUS");
//     // } 
//     else {
//         console.log("Anda tidak LULUS");
//     }


var name = "ican";
var role = "member lama";
var birthMonth = "januari";

if (name == ""){
    console.log("isi namamu dulu tod");
}
if (role == "") {
    console.log ("Role harus diisi")
}
if (birthMonth == ""){
    console.log ("Birth month harus diisi")
}
    if (role == "member baru" && birthMonth == "januari"){
        console.log ("Selamat " + name + "!. Anda berhak mendapatkan voucher diskon sebesar 50%!");
    } 
        if (role === "member lama" && birthMonth === "januari"){
            console.log ("Selamat " + name + "!. Anda berhak mendapatkan voucher diskon sebesar 30%!");
        } 
            if (role === "belum terdaftar"){
                console.log ("Selamat datang di Bikilipik, " + name + " Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu");
            }
                if (role == "member baru" && birthMonth != "januari"){
                    console.log ("maaf diskon hanya untuk yang lahir di bulan januari");
                }
                    if (role == "member lama" && birthMonth != "januari"){
                        console.log ("maaf diskon hanya untuk yang lahir di bulan januari");
                    } 
