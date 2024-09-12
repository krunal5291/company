
 const Total= (formId, totalId) => {
    let num1 = document.getElementById('num1-' + formId).value
    let num2 = document.getElementById('num2-' + formId).value
    let num3 = document.getElementById('num3-' + formId).value

    let total = Number(num1) + Number(num2) + Number(num3);

    document.getElementById(totalId).innerText = total;
}

const ColumnTotal=() => {
    let column1 = 0;
    let column2 = 0;
    let column3 = 0;

    for (let i = 1; i <= 3; i++) {
        let num1 = document.getElementById('num1-form' + i).value
        let num2 = document.getElementById('num2-form' + i).value
        let num3 = document.getElementById('num3-form' + i).value

        column1 =column1+ Number(num1);
        column2 =column2+ Number(num2);
        column3 =column3+ Number(num3);
    }

    let td1 = document.createElement("td")
    td1.innerHTML = column1

    let td2 = document.createElement("td")
    td2.innerHTML = column2

    let td3 = document.createElement("td")
    td3.innerHTML = column3

    let cl = document.createElement("tr")
    cl.append(td1, td2, td3)
    let cl1 = document.getElementById("cl1")
    cl1.innerHTML = ""
    cl1.append(cl)
}
