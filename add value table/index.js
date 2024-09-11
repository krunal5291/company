let t1 = 0;
let t2 = 0;
let t3 = 0;

const addValue = (e) => {
  e.preventDefault();

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  let td1 = document.createElement("td");
  td1.innerHTML = num1;
  let td2 = document.createElement("td");
  td2.innerHTML = num2;
  let td3 = document.createElement("td");
  td3.innerHTML = num3;
  let td4 = document.createElement("td");
  td4.innerHTML = Number(num1) + Number(num2) + Number(num3);

  let tr = document.createElement("tr");
  tr.append(td1, td2, td3, td4);

  t1 =t1+ Number(num1);
  t2 =t2+ Number(num2);
  t3 =t3+ Number(num3);

  let td5 = document.createElement("td");
  td5.innerHTML = t1;
  let td6 = document.createElement("td");
  td6.innerHTML = t2;
  let td7 = document.createElement("td");
  td7.innerHTML = t3;
  let td8 = document.createElement("td");
  td8.innerHTML = t1 + t2 + t3;

  let tr2 = document.createElement("tr");
  tr2.append(td5, td6, td7, td8);

  document.getElementById("tbody").append(tr);

  total.innerHTML = "";
  total.append(td5, td6, td7, td8);
};


document.getElementById("form").addEventListener("submit", addValue)    