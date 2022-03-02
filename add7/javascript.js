function add7(){
    let userNum = prompt("Input a number","");
    
    if (!isNaN(+userNum)){
    userNum = +userNum + 7;
    alert(userNum);
    }
    else {
        alert("Enter a Interger");
    }
    return userNum;
}
