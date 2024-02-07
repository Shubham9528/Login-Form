function submit() {
    var userName = document.querySelector(".userName").value;
    var password = document.querySelector(".password").value;
   
    if (userName == "admin" && password == "admin123") 
    {
        alert("Login success!");
    }
    else if(userName == "" && password == "")
    {
        alert("Please enter username and password");
    }
    
    else{
        alert("Login failed please enter your correct username and password");
    }
    
}
document.querySelector(".button").addEventListener("click", submit);
