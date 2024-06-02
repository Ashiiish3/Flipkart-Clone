const params = new URLSearchParams(window.location.search)
window.addEventListener("load",()=>{
    let descriptionContainer = document.querySelector(".description-container")
    if(params.has("battery")){
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
                    <img src=${image_url} alt="" id="addCart-image">
                </div>
                <button id="addButton" class="addCardButton">Add To Cart</button>
            </div>
            <div class="col-lg-7 px-lg-4 ms-lg-2 info-box">
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
                <li class="offerItem mb-1"><b>Bank Offer </b> Get ₹50 instant discount on first Flipkart UPI txn on order of ₹200 and above</li>
                <li class="offerItem mb-1"><b>Bank Offer </b> 5% Cashback on Flipkart Axis Bank Card</li>
                <li class="offerItem mb-1"><b>Special Price </b> Get extra ₹3000 off (price inclusive of cashback/coupon)</li>
                <li class="offerItem mb-1"><b>Freebie </b> Flat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking</li>
                <li class="offerItem mb-1"><b>Freebie </b> Flat ₹650 off on Cleartrip flights booking along with 300 supercoins on booking</li>
                <li class="offerItem mb-1"><b>Partner Offer </b> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</li>
                <li class="offerItem mb-1"><b>Partner Offer </b> Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</li>
            </div>
        `
        descriptionContainer.append(card)
    }
    if(params.get("brand")){
        const image_url = params.get("image_url")
        const name = params.get("name")
        const rating = params.get("rating")
        const ratings_reviews = params.get("ratings_reviews")
        const price = params.get("price")
        const original_price = params.get("original_price")
        const discount = params.get("discount")
        const brand = params.get("brand")
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
            <div class="col-lg-7 px-lg-4 ms-lg-2 info-box">
                <h6 id="brand" class="mb-0">${brand}</h6>
                <h5 id="name" class="mb-1">${name}</h5>
                <span id="rating">${rating} ★</span>
                <span id="ratings_reviews">${ratings_reviews}</span>
                <div id="priceInfo">
                    <span id="price">₹${price}</span>
                    <span id="original_price">₹${original_price}</span>
                    <span id="discount">${discount}</span>
                </div>
                <h5 id="offers" class="mt-2">Available Offers</h5>
                <li class="offerItem mb-2"><b>Bank Offer </b> Get ₹50 instant discount on first Flipkart UPI txn on order of ₹200 and above</li>
                <li class="offerItem mb-2"><b>Bank Offer </b> 5% Cashback on Flipkart Axis Bank Card</li>
                <li class="offerItem mb-2"><b>Special Price </b> Get extra ₹3000 off (price inclusive of cashback/coupon)</li>
                <li class="offerItem mb-2"><b>Freebie </b> Flat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking</li>
                <li class="offerItem mb-2"><b>Freebie </b> Flat ₹650 off on Cleartrip flights booking along with 300 supercoins on booking</li>
                <li class="offerItem mb-2"><b>Partner Offer </b> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</li>
                <li class="offerItem mb-2"><b>Partner Offer </b> Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</li>
                <li class="offerItem mb-2"><b>Bank Offer </b> 10% off up to ₹1,750 on HDFC Bank Debit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹7500</li>
            </div>
        `
        descriptionContainer.append(card)
    }
    if(params.get("category") == "tv & refrigerator" || params.get("category") == "furniture & mattresses" || params.get("category") == "electronics"){
        const image_url = params.get("image_url")
        const name = params.get("name")
        const rating = params.get("rating")
        const ratings_reviews = params.get("ratings_reviews")
        const price = params.get("price")
        const original_price = params.get("original_price")
        const discount = params.get("discount")
        const delivery_time = params.get("delivery_time")
        const quantity = params.get("quantity")
        const category = params.get("category")
        const card = document.createElement("div")
        card.classList.add("row")
        card.innerHTML =`
            <div class="col-lg-5 text-center">
                <div class="image-box border">
                    <img src=${image_url} alt="" id="addCart-image">
                </div>
                <button id="addButton" class="addCardButton">Add To Cart</button>
            </div>
            <div class="col-lg-7 px-lg-4 ms-lg-2 info-box">
                <h5 id="name" class="mb-1">${name}</h5>
                <span id="rating">${rating} ★</span>
                <span id="ratings_reviews">${ratings_reviews}</span>
                <div id="priceInfo">
                    <span id="price">₹${price}</span>
                    <span id="original_price">₹${original_price}</span>
                    <span id="discount">${discount}</span>
                </div>
                <h5 id="offers" class="mt-2">Available Offers</h5>
                <li class="offerItem mb-2"><b>Bank Offer </b> Get ₹50 instant discount on first Flipkart UPI txn on order of ₹200 and above</li>
                <li class="offerItem mb-2"><b>Bank Offer </b> 5% Cashback on Flipkart Axis Bank Card</li>
                <li class="offerItem mb-2"><b>Special Price </b> Get extra ₹3000 off (price inclusive of cashback/coupon)</li>
                <li class="offerItem mb-2"><b>Freebie </b> Flat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking</li>
                <li class="offerItem mb-2"><b>Freebie </b> Flat ₹650 off on Cleartrip flights booking along with 300 supercoins on booking</li>
                <li class="offerItem mb-2"><b>Partner Offer </b> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</li>
                <li class="offerItem mb-2"><b>Partner Offer </b> Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</li>
                <li class="offerItem mb-2"><b>Bank Offer </b> 10% off up to ₹1,750 on HDFC Bank Debit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹7500</li>
            </div>
        `
        descriptionContainer.append(card)
    }
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
        "ratings_reviews": params.get("ratings_reviews"),
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