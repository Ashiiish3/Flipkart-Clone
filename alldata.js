// fetch all data
let container = document.querySelector("#allDataBox")
window.addEventListener("load", ()=>{
    const params = new URLSearchParams(window.location.search)
    const phonesInnerData = JSON.parse(params.get("phonesInnerData"))
    phonesInnerData.forEach(element => {
        let div = document.createElement("div")
        div.innerHTML = `
            <a href="description.html?image_url=${encodeURIComponent(element.image_url)}&name=${encodeURIComponent(element.name)}&rating=${encodeURIComponent(element.rating)}&ratings_reviews=${encodeURIComponent(element.ratings_reviews)}&ram=${encodeURIComponent(element.description.RAM)}&rom=${encodeURIComponent(element.description.ROM)}&display=${encodeURIComponent(element.description.Display)}&camera=${encodeURIComponent(element.description.Camera)}&battery=${encodeURIComponent(element.description.Battery)}&ratings_reviews=${encodeURIComponent(element.ratings_reviews)}&processor=${encodeURIComponent(element.description.Processor)}&warranty=${encodeURIComponent(element.description.Warranty)}&price=${encodeURIComponent(element.price)}" id="phoneItem">
                <div id="image-part">
                    <img src=${element.image_url} alt="">
                </div>
                <div id="descriptionInfo">
                    <div id="productInfo">
                        <h5 id="name" class="mb-1">${element.name}</h5>
                        <span id="rating">${element.rating} ★</span>
                        <span id="ratings_reviews">${element.ratings_reviews}</span>
                        <ul class="ps-4 mt-2">
                            <li id="ram">${element.description.RAM}</li>
                            <li id="rom">${element.description.ROM}</li>
                            <li id="display">${element.description.Display}</li>
                            <li id="camera">${element.description.Camera}</li>
                            <li id="battery">${element.description.Battery}</li>
                            <li id="processor">${element.description.Processor}</li>
                            <li id="warranty">${element.description.Warranty}</li>
                        </ul>
                    </div>
                    <div id="priceInfo">
                        <h4 id="price">₹${element.price}</h4>
                        <span id="original_price">₹${element.original_price}</span>
                        <span id="discount">${element.discount}</span>
                        <p id="delivery_time">${element.delivery_time}</p>
                    </div>
                </div>
            </a>
            <hr>
        `
        container.append(div)
    });
})