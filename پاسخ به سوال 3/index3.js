function myFunction() {
  let temp = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  localStorage.setItem("user", JSON.stringify(temp));
  
  let getInfo = localStorage.getItem("temp");

  console.log("getInfo: ", JSON.parse(getInfo));
}

setTimeout(myFunction, 5000);
