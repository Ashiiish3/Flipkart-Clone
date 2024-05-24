// fetch add to cart data
const addCartInfoContainer = document.querySelector("#addCart-info")
function getAddCartData(){
    fetch("http://localhost:3000/add-To-Cart-data").then((res)=>res.json()).then((data)=>multipleCards(data)).catch((err)=>console.log(err))
}
getAddCartData()
function singleCard(image_url, name, RAM, original_price, price, discount, delivery_time){
    let div = `
        <a href="#">
            <div class="addCart-box d-grid">
                <div id="addCart-image">
                    <img src=${image_url} alt="">
                </div>
                <div id="addCartTitleSection">
                    <div id="titleInfo">
                        <h5 id="name" class="mb-1">${name}</h5>
                        <p id="ram">${RAM}</p>
                        <span id="original_price">${original_price}</span>
                        <span id="price">${price}</span>
                        <span id="discount">${discount}</span>
                    </div>
                    <div id="deliveryInfo">
                        <p id="delivery_time">${delivery_time}</p>
                    </div>
                </div>
                <div class="price-input">
                    <button>-</button>
                    <input type="number" value="1">
                    <button>+</button>
                </div>
                <div class="price-delete">
                    <button>Remove</button>
                </div>
            </div>
        </a>
    `
    return div
}
function multipleCards(data){
    let storeAddCartData = data.map((ele)=>singleCard(ele.image_url, ele.name, ele.RAM, ele.original_price, ele.price, ele.discount, ele.delivery_time))
    addCartInfoContainer.innerHTML = storeAddCartData
}