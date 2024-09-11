const optionadd=(e)=>{
    e.preventDefault()

    let option=document.getElementById("value").value

    let select=document.createElement("option")

    select.append(option)

    document.getElementById("newvalue").append(select)
}

document.getElementById("form").addEventListener("submit",optionadd)