<table border="2px">
    <thead>
        <tr>
            <td>num1</td>
            <td>num2</td>
            <td>num3</td>
            <td>submit</td>
            <td>total</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <form class="form">
                <td><input type="number" class="num1"></td>
                <td><input type="number" class="num2"></td>
                <td><input type="number" class="num3"></td>
                <td><input type="submit"></td>
                <td class="total"></td>
            </form>
        </tr>
        <tr>
            <form class="form">
                <td><input type="number" class="num1"></td>
                <td><input type="number" class="num2"></td>
                <td><input type="number" class="num3"></td>
                <td><input type="submit"></td>
                <td class="total"></td>
            </form>
        </tr>
        <tr>
            <form class="form">
                <td><input type="number" class="num1"></td>
                <td><input type="number" class="num2"></td>
                <td><input type="number" class="num3"></td>
                <td><input type="submit"></td>
                <td class="total"></td>
            </form>
        </tr>
    </tbody>
    <tfoot id="cvalue"></tfoot>
</table>




const forms = document.querySelectorAll('.form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let num1 = form.querySelector('.num1').value;
    let num2 = form.querySelector('.num2').value;
    let num3 = form.querySelector('.num3').value;

    console.log(num1, num2, num3);

    let num = Number(num1) + Number(num2) + Number(num3);
    let totalElement = form.querySelector('.total');
    totalElement.textContent = num;
  });
});

















let t1 = 0
let t2 = 0
let t3 = 0


document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault()
    calculateTotal('form1', 'total1')
    updateColumnTotal('form1')
});

document.getElementById('form2').addEventListener('submit', function (event) {
    event.preventDefault()
    calculateTotal('form2', 'total2')
    updateColumnTotal('form2')
});

document.getElementById('form3').addEventListener('submit', function (event) {
    event.preventDefault()
    calculateTotal('form3', 'total3')
    updateColumnTotal('form3')
});

function calculateTotal(formId, totalId) {
    let num1 = document.getElementById(`num1-${formId}`).value
    let num2 = document.getElementById(`num2-${formId}`).value
    let num3 = document.getElementById(`num3-${formId}`).value

    let total = Number(num1) + Number(num2) + Number(num3);
    document.getElementById(totalId).innerText = total;
}

function updateColumnTotal(formId) {
    let num1 = document.getElementById(`num1-${formId}`).value
    let num2 = document.getElementById(`num2-${formId}`).value
    let num3 = document.getElementById(`num3-${formId}`).value
    
    t1 = t1 + Number(num1)
    t2 = t2 + Number(num2)
    t3 = t3 + Number(num3)
    
        let td1=document.createElement("td")
        td1.innerHTML=t1

        let td2=document.createElement("td")
        td2.innerHTML=t2
        
        let td3=document.createElement("td")
        td3.innerHTML=t3
        

    let c1=document.createElement("td")
    cl.append(td1)


    let c2=document.createElement("td")
    cl.append(td2)


    let c3=document.createElement("td")
    cl.append(td3)


    let cl1=document.getElementById("cl1")
    cl1.innerHTML = "";
    cl1.append(c1);


    let cl2=document.getElementById("cl2")
    cl2.innerHTML = "";
    cl2.append(c2);


    let cl3=document.getElementById("cl3")
    cl3.innerHTML = "";
    cl3.append(c3);

}


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="2px">
        <thead>
            <tr>
                <td>num1</td>
                <td>num2</td>
                <td>num3</td>
                <td>submit</td>
                <td>total</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <form id="form1">        
                    <td><input type="number" id="num1-form1"></td>         
                    <td><input type="number" id="num2-form1"></td>         
                    <td><input type="number" id="num3-form1"></td>         
                    <td><input type="submit" value="Calculate"></td>         
                    <td id="total1"></td>         
                </form>         
                
            </tr>
            <tr>
                <form id="form2">
                    <td><input type="number" id="num1-form2"></td>
                    <td><input type="number" id="num2-form2"></td>
                    <td><input type="number" id="num3-form2"></td>
                    <td><input type="submit" value="Calculate"></td>
                    <td id="total2"></td>
                </form>
            </tr>
            <tr>
                <form id="form3">
                    <td><input type="number" id="num1-form3"></td>
                    <td><input type="number" id="num2-form3"></td>
                    <td><input type="number" id="num3-form3"></td>
                    <td><input type="submit" value="Calculate"></td>
                    <td id="total3"></td>
                </form>
            </tr>
            
            <tr id="cl1"></tr>
            <tr id="cl2"></tr>
            <tr id="cl3"></tr>
        </tbody>
    </table>

    <script src="index.js"></script>
</body>

</html>
