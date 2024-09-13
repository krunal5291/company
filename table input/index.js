function Total(element) {
    let row = element.closest('tr')
    let inputs = row.querySelectorAll('input[type="number"]')
    let sum = 0

    inputs.forEach(input => {
        sum =sum+ Number(input.value)
    })

    row.querySelector('.total').innerText = sum
}

function ColumnTotal() {
    let tbody = document.querySelector('tbody') 
    let rows = tbody.querySelectorAll('tr')
    let columnSums = [0, 0, 0]

    rows.forEach(row => {
        let inp = row.querySelectorAll('input[type="number"]');
        inp.forEach((inp, i) => {
            columnSums[i] =columnSums[i]+ Number(inp.value)
        });
    });

    columnSums.forEach((sum, i) => {
        document.getElementById(`col-total${i    + 1}`).innerText = sum
    })
}
