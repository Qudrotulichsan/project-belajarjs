//proxytia

var nama = "ican";
var peran ="Penyihir";

    if (nama == ""){
        console.log("nama harus di isi!");
    } 

    if (peran == ""){
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");

    }
    if (nama && peran){
        console.log("Selamat datang di Dunia proxytia, " + nama);
        if (peran == "Ksatria"){
            console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
        } 
        if (peran == "Tabib"){
            console.log("Hallo Tabib " + nama + ", Kamu dapat menyerang iman musuhmu!")   
        }
        if (peran == "Penyihir"){
            console.log("Hallo Penyihir " + nama + ", Kamu dapat menyerang iman musuhmu!")   
        }
       
    }
    

 
        
    




    // if (nama){
    //     console.log("Halo " + nama + ", pilih peranmu untuk memulai game!");
    //     if (peran){
    //         if (peran ==="Ksatria"){
    //             console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    //             if (peran ==="Tabib"){
    //                 console.log("Halo Tabib " + nama + ", kamu dapat Menyembuhkan temanmu!");
    //                 if (peran ==="Penyihir"){
    //                     console.log("Halo Penyihir " + nama + ", kamu dapat menggunakan sunstrike!");  
    //                 }
    //             }
    //         }    
    //     } 
            
    // }
    // else {
    //     console.log("nama harus diisi");
    // }
        

   
