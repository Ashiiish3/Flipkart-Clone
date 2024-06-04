// fetch add to cart data
const addCartInfoContainer = document.querySelector("#addCart-info")
const counts = document.querySelector("#cart-counts")
let dataArray = []
function getAddCartData(){
    fetch("http://localhost:3000/add-To-Cart-data").then((res)=>res.json()).then((data)=>{
        counts.innerHTML = data.length
        totalAmount(data)
        multipleCards(data)
    }).catch((err)=>console.log(err))
}
getAddCartData()
function singleCard(image_url, name, ratings_reviews, original_price, price, discount, delivery_time, id, quantity, brand){
    let div = `
        <a href="#" class="text-dark text-decoration-none">
            <div class="addCart-box d-grid">
                <div id="addCart-image">
                    <img src=${image_url} alt="">
                </div>
                <div id="addCartTitleSection">
                    <div id="titleInfo">
                        <h5 id="name" class="mb-1">${name}</h5>
                        <p id="ram" class="mb-lg-2 mb-0">${ratings_reviews}</p>
                        <span id="original_price" class="me-2">₹${original_price}</span>
                        <span id="price" class="me-2">₹${price}</span>
                        <span id="discount">${discount}</span>
                    </div>
                    <div id="deliveryInfo">
                        <p id="delivery_time">${delivery_time}</p>
                    </div>
                </div>
                <div class="price-input">
                    <button class="decreaseQuantity border mx-2" data-id="${id}">−</button>
                    <button id="quntValue">${quantity}</button>
                    <button class="increaseQuantity border mx-2" data-id="${id}">+</button>
                </div>
                <div class="price-delete">
                    <button class="deleteButton" data-id="${id}">Remove</button>
                </div>
            </div>
        </a>
        <hr class="m-0">
    `
    return div
}
function multipleCards(data){
    let storeAddCartData = data.map((ele)=>singleCard(ele.image_url, ele.name, ele.ratings_reviews, ele.original_price, ele.price, ele.discount, ele.delivery_time, ele.id, ele.quantity))
    addCartInfoContainer.innerHTML = storeAddCartData.join("")
}
// for delete add cart product
document.addEventListener("click", (eve)=>{
    if(eve.target.classList.contains("deleteButton")){
        if(confirm("Are you sure you want to remove this item?")){
            deleteProduct(eve.target.dataset.id)
        }
    }
})
function deleteProduct(id){
    fetch(`http://localhost:3000/add-To-Cart-data/${id}`,{
        method: 'DELETE',
    })
}
// for total amount
const totalPrice = document.querySelector("#totalAmount")
let sum = 0;
function totalAmount(data){
    data.forEach((element)=>{
        sum += Number(element.price.replace(/,/g, ''))
        totalPrice.innerHTML = `₹${sum}`
    })
}