function UpdateUser(){
    let userName=""
    let userNameEle = document.getElementById("userName");
    if(userNameEle ){
        userName = userNameEle.value;
        console.log(userName)
    }
    let userAge= ""
    let userAgeEle = document.getElementById("userAge");
    
    if(userNameEle ){
        userAge = userAgeEle.value
        console.log(userName)
    }
    window.alert(`Welcome ${userName}, ${userAge}`)
}