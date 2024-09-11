const adddata=(e)=>{
    e.preventDefault()

    let name=document.getElementById("name").value
    let number=document.getElementById("number").value
    let email=document.getElementById("email").value
    console.log(name,number,email);
    
    let td1=document.createElement("td")
    td1.innerHTML=name
    let td2=document.createElement("td")
    td2.innerHTML=number
    let td3=document.createElement("td")
    td3.innerHTML=email

    let tr=document.createElement("tr")

    tr.append(td1,td2,td3)

    document.getElementById("data").append(tr)

}


document.getElementById("form").addEventListener("submit",adddata)



let arr=[1,1,2,1,4,5,8,5,5,5,7,54,4,7]


console.log(arr);
