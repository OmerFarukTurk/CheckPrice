const productsWrapper = document.querySelector(".products-wrapper")
const attr = 
{
    method : "GET",
    redirect : "follow",
    
}




async function changePrice () {

    const res = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_G695zoWyBlrWxOM4EC7KfKDX2S7NEHVxjQ4M7RNT",attr);
    const x = await res.json();
    let tlVal = x.data.TRY
    
    

    const price = document.querySelectorAll(".price")
    for (let value of price) {
        let dolarVal = value.innerHTML
        dolarVal = parseInt (dolarVal)
        // console.log(dolarVal)
        // console.log(tlVal)
        
        let newVal = Math.floor ( tlVal * parseInt(dolarVal) )
        value.innerHTML = `${newVal} TL `
        

    }
    
    
}



function createCard(products) {

    for (let product of products) {
        


        const productCard = document.createElement("div")
        productCard.className = "product-card"

        const cardImage = document.createElement("img")
        cardImage.setAttribute("src", product.images[0])

        const productName = document.createElement("h2")
        productName.innerHTML = product.title

        const price = document.createElement("h4")
        price.innerHTML = product.price + " $ "
        price.className = "price"

        productCard.appendChild(cardImage)
        productCard.appendChild(productName)
        productCard.appendChild(price)
        productsWrapper.appendChild(productCard)
    }

}

async function getProductData() {

    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    return data.products

}

async function runEvents() {
    let products = await getProductData();
    await createCard(products);
    changePrice ();
    setInterval(changePrice,1000000)

 


}

runEvents();
