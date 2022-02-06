var kata = "xoxxxxxoooxo"
var x ="";
var o="";


for(let i= 0; i < kata.length; i++){
    if(kata[i] == "x"){
       x = x + 1;
    } else if (kata[i] == "o"){
        o = o + 1;
    }
}
console.log(kata);
console.log(x , o);

if(x == o){
    console.log("true");
} else {
    console.log("false");
}




// Contoh 1:
// var kata = 'xoxoxo'

// maka output adalah true


// Contoh 2:
// var kata = 'oxooxox'

// maka output adalah false