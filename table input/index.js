let t1 = 0
let t2 = 0
let t3 = 0
let i = 0

document.getElementById('form1').addEventListener('submit', (e) => {
    e.preventDefault()
    Total('form1', 'total1')
    ColumnTotal('form1')
})
document.getElementById('form2').addEventListener('submit', (e) => {
    e.preventDefault()
    Total('form2', 'total2')
    ColumnTotal('form2')
})

document.getElementById('form3').addEventListener('submit', (e) => {
    e.preventDefault()
    Total('form3', 'total3')
    ColumnTotal('form3')
})

function Total(formId, totalId) {
    let num1 = document.getElementById(`num1-${formId}`).value
    let num2 = document.getElementById(`num2-${formId}`).value
    let num3 = document.getElementById(`num3-${formId}`).value

    let total = Number(num1) + Number(num2) + Number(num3)
    document.getElementById(totalId).innerHTML = total
}

function ColumnTotal(formId) {
    let num1 = document.getElementById(`num1-${formId}`).value
    let num2 = document.getElementById(`num2-${formId}`).value
    let num3 = document.getElementById(`num3-${formId}`).value

    if (i < 3) {
        t1 = t1 + Number(num1)
        t2 = t2 + Number(num2)
        t3 = t3 + Number(num3)
        i++
    }


    let td1 = document.createElement("td")
    td1.innerHTML = t1

    let td2 = document.createElement("td")
    td2.innerHTML = t2

    let td3 = document.createElement("td")
    td3.innerHTML = t3

    let cl = document.createElement("tr")
    cl.append(td1, td2, td3)
    let cl1 = document.getElementById("cl1")
    cl1.innerHTML = ""
    cl1.append(cl)
    console.log(t1, t3, t2)
}