
function myFunction() { 
    let temp = {username:document.getElementById('username').value, 
    password:document.getElementById('password').value
}
    

    localStorage.setItem('user', JSON.stringify(temp)); 
}
 

