// changes janes name
function changeName(){
    document.querySelector("#text").innerHTML = "Reb Hillel Parecher";
}

// var toddE = document.querySelector("#todd");
// function todd(){
//     toddE.remove();
// }
// var philK = document.querySelector("#phil");
// function phil(){
//     philK.remove();
// }

// removing person from connection requests
function remove(name){
    var click = document.querySelector(name);
    click.remove();
}

// connection number
// function minusOne(){
//     var minus = document.getElementsByClassName('numbertwo').innerHTML[0];
//     minus --;
//     document.getElementsByClassName('numbertwo') = minus;

    // console.log(value);
    // minus = minus + value;
    // console.log(minus);
// }
