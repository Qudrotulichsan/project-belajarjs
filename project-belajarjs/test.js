var nama = '';
var peran = 'Ksatria';

if(nama){
    if(peran){
        if(peran === "Ksatria"){
            console.log("Halo Ksatria " + nama + ", kamu dapat menyrang dengan senjatamu!");
        }
    }
    else{
        console.log("Halo " + nama + " Pilih peranmu untuk memulai game!");
    }
}
else{
    console.log("Nama harus diisi!");
}

// "Nama harus diisi!"

// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!