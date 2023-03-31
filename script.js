var password = document.getElementById('password');
var checkbox = document.getElementById('checkbox');

function check(){
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}