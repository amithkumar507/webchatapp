function validate(){
    
   
    
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === "happy" && password === "pass") {
        
        
        window.location = "home.html";
        alert("Login Sucessfull");
        
    }
    
    else {
        
        alert("invalid username or password");
        
    }
}