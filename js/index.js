let products=JSON.parse(localStorage.getItem("product"))|| []


const Ui = (products) => {
    document.getElementById("ui").innerHTML = ""
    products.map((product) => {
        let img = document.createElement("img")
        img.src = product.img
        let name = document.createElement("h1")
        name.innerHTML = product.name
        let price = document.createElement("h3")
        price.innerHTML = product.price
        let category = document.createElement("h5")
        category.innerHTML = product.category
        let div = document.createElement("div")
        div.append(img, name, price, category)
        document.getElementById("ui").append(div)
    })
}
Ui(products)
let print = (e) => {
    e.preventDefault()
    let product = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        img: document.getElementById("url").value,
        category: document.getElementById("category").value
    }
    products.push(product)

    localStorage.setItem("product", JSON.stringify(products))

    Ui(products)
}




const handlehtl = () => {
    let data = products.sort((a, b) => b.price - a.price)
    Ui(data)    
    console.log(data);
}


const handlelth = () => {
    let data = products.sort((a, b) => a.price - b.price)

    Ui(data)
    console.log(data);

}

document.getElementById("htl").addEventListener("click", handlehtl)
document.getElementById("lth").addEventListener("click", handlelth)
const Handelcategory = (cat) => {
    let data = products.filter((value) => value.category == cat)
    console.log(data);
    Ui(data)

}

let cat = ["men", "women", "kids"]

for (let i = 0; i < cat.length; i++) {
    let btn = document.createElement("button")
    btn.innerHTML = cat[i]
    btn.setAttribute("id", cat[i])
    document.getElementById("btns").append(btn)
}

for (let i = 0; i < cat.length; i++) {
    document.getElementById(cat[i]).addEventListener("click", () => Handelcategory(cat[i]))
}

document.getElementById("form").addEventListener("submit", print)
