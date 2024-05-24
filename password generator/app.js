
let passwords = document.getElementById("password")

let length = 10;

let capital_letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let small_letters = "abcdefghijklmnopqrstuvwxyz";

let number = "0123456789";

let symbol = "!@#$%^&*()-_=+[]{}\|;:'\",.<>/?~`"

let all_words = capital_letters + small_letters + number + symbol;


function Generatepassword() {
    
    
    let result =""

    result+=capital_letters[Math.floor(Math.random()*capital_letters.length)]
    result+=small_letters[Math.floor(Math.random()*small_letters.length)]
    result+=number[Math.floor(Math.random()*number.length)]
    result+=symbol[Math.floor(Math.random()*symbol.length)]

    while(length>result.length){
    result+=all_words[Math.floor(Math.random()*all_words.length)]

    }

    passwords.value=result;

}

function copypassword(){

    let passwordcopy = document.getElementById("copies")
    
    navigator.clipboard.writeText(passwords.value)

    copy.innerText= "Password Copied"

    setTimeout(() => {
        copy.innerText = "";
    }, 1000);
}


