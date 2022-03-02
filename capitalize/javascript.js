function capitalize(){

    let userStr = prompt("Enter your text.","");
    let upper = userStr[0].toUpperCase() + userStr.substring(1);    
    let strlen = userStr.length;
    let final;
    if (userStr.includes(".") == false){
        alert(upper + ".");
    }
    else{
        alert(upper);
    }
}

