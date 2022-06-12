function UpdateUser(){
    let userName=""
    let userNameEle = document.getElementById("userName");
    if(userName ){
        userName = userNameEle.value
    }
    let userAge= ""
    let userAgeEle = document.getElementById("userAge")?.value;
    if(userAgeEle ){
        userName = userAgeEle.value
    }
    window.alert(`Welcome ${userName}, ${userAge}`)
}