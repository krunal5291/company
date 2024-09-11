const validation = (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let Password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let Company = document.getElementById("Company").value
    let number=document.getElementById("number").value
    console.log(name, Password, email, Company);

    let pattern = /^[a-zA-Z ]{2,10}$/
    let emailv = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,})$/
    let passwordv = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let Companyv = /^[a-zA-Z@#$%^&*]{2,12}$/
    // let numberv=!/^[0-9]+$/

    if (pattern.test(name)) {
        document.getElementById("namem").innerHTML = "your name is valid"
    }
    else {
        alert("enter valid name")
        return true;
    }


    // if (numberv.test(number)) {
    //     document.getElementById("numberm").innerHTML = "your number is valid"
    // }
    // else {
    //     alert("enter valid number")
    //     return true;
    // }


    if (emailv.test(email)) {
        document.getElementById("emailm").innerHTML = "your Email is valid"
    }
    else {
        alert("enter valid email")
        return true;
    }


    if (passwordv.test(Password)) {
        document.getElementById("passwordm").innerHTML = "your Email is valid"
    }
    else {
        alert("enter valid password")
        return true;
    }


    if (Companyv.test(Company)) {
        document.getElementById("Companym").innerHTML = "it is valid Company name"
    }
    else {
        alert("enter valid Company name")
        return true;
    }

}

document.getElementById("form").addEventListener("submit", validation)