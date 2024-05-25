const params = new URLSearchParams(window.location.search)
window.addEventListener("load",()=>{
    let descriptionContainer = document.querySelector(".description-container")
    const image_url = params.get("image_url")
    const name = params.get("name")
    const rating = params.get("rating")
    const ratings_reviews = params.get("ratings_reviews")
    const ram = params.get("ram")
    const rom = params.get("rom")
    const display = params.get("display")
    const processor = params.get("processor")
    const camera = params.get("camera")
    const battery = params.get("battery")
    const price = params.get("price")
    const original_price = params.get("original_price")
    const discount = params.get("discount")
    const delivery_time = params.get("delivery_time")
    const quantity = params.get("quantity")
    const card = document.createElement("div")
    card.classList.add("row")
    card.innerHTML =`
        <div class="col-lg-5 text-center">
            <div class="image-box border">
                <img src=${image_url} alt="" id="image_url">
            </div>
            <button id="addButton" class="addCardButton">Add To Cart</button>
        </div>
        <div class="col-lg-7 px-4 ms-2 info-box">
            <h5 id="name" class="mb-1">${name}</h5>
            <span id="rating">${rating} ★</span>
            <span id="ratings_reviews">${ratings_reviews}</span>
            <div id="priceInfo">
                <span id="price">₹${price}</span>
                <span id="original_price">₹${original_price}</span>
                <span id="discount">${discount}</span>
            </div>
            <ul class="ps-4 mt-2">
                <li id="ram">${ram}</li>
                <li id="rom">${rom}</li>
                <li id="display">${display}</li>
                <li id="camera">${camera}</li>
                <li id="battery">${battery}</li>
                <li id="processor">${processor}</li>
            </ul>
            <h5 id="offers">Available Offers</h5>
            <li class="offerItem"><b>Bank Offer </b> Get ₹50 instant discount on first Flipkart UPI txn on order of ₹200 and above</li>
            <li class="offerItem"><b>Bank Offer </b> 5% Cashback on Flipkart Axis Bank Card</li>
            <li class="offerItem"><b>Special Price </b> Get extra ₹3000 off (price inclusive of cashback/coupon)</li>
            <li class="offerItem"><b>Freebie </b> Flat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking</li>
            <li class="offerItem"><b>Freebie </b> Flat ₹650 off on Cleartrip flights booking along with 300 supercoins on booking</li>
            <li class="offerItem"><b>Partner Offer </b> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</li>
            <li class="offerItem"><b>Partner Offer </b> Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</li>
        </div>
    `
    descriptionContainer.append(card)
})
// add to cart
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addCardButton")){
        addCardData(e.target.className)
    }
})
function addCardData(clss){
    let phoneObj = {
        "image_url": params.get("image_url"),
        "name": params.get("name"),
        "RAM": params.get("ram"),
        "original_price": params.get("original_price"),
        "price": params.get("price"),
        "discount": params.get("discount"),
        "delivery_time": params.get("delivery_time"),
        "quantity": params.get("quantity")
    }
    fetch("http://localhost:3000/add-To-Cart-data",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(phoneObj),
    })
}