// fetch all data
let container = document.querySelector("#allDataBox")
window.addEventListener("load", ()=>{
    const params = new URLSearchParams(window.location.search)
    if(params.has("phonesInnerData")){
        const phonesInnerData = JSON.parse(params.get("phonesInnerData"))
        phonesInnerData.forEach(element => {
            let div = document.createElement("div")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(element.image_url)}&name=${encodeURIComponent(element.name)}&rating=${encodeURIComponent(element.rating)}&ratings_reviews=${encodeURIComponent(element.ratings_reviews)}&ram=${encodeURIComponent(element.description.RAM)}&rom=${encodeURIComponent(element.description.ROM)}&display=${encodeURIComponent(element.description.Display)}&camera=${encodeURIComponent(element.description.Camera)}&battery=${encodeURIComponent(element.description.Battery)}&processor=${encodeURIComponent(element.description.Processor)}&warranty=${encodeURIComponent(element.description.Warranty)}&price=${encodeURIComponent(element.price)}&original_price=${encodeURIComponent(element.original_price)}&discount=${encodeURIComponent(element.discount)}&delivery_time=${encodeURIComponent(element.delivery_time)}&quantity=${encodeURIComponent(element.quantity)}" id="phoneItem">
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
    }
    if(params.has("dealInnerData")){
        const dealInnerData = JSON.parse(params.get("dealInnerData"))   
        dealInnerData.forEach((ele)=>{
            let div = document.createElement("div")
            div.classList.add("topDeal-box")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(ele.image_url)}&name=${encodeURIComponent(ele.name)}&brand=${encodeURIComponent(ele.brand)}&rating=${encodeURIComponent(ele.rating)}&ratings_reviews=${encodeURIComponent(ele.ratings_reviews)}&price=${encodeURIComponent(ele.price)}&original_price=${encodeURIComponent(ele.original_price)}&discount=${encodeURIComponent(ele.discount)}&quantity=${encodeURIComponent(ele.quantity)}&delivery_time=${encodeURIComponent(ele.delivery_time)}" id="topDeal">
                    <div id="image-part">
                        <img src=${ele.image_url} alt="">
                    </div>
                    <div id="descInfo">
                        <p class="m-0" id="sponsored">${ele.sponsored}</p>
                        <h5 id="brand">${ele.brand}</h5>
                        <h6 id="name">${ele.name}</h6>
                        <p><span id="price">₹${ele.price}</span> <span id="original_price" class="mx-1">₹${ele.original_price}</span> <span id="discount">${ele.discount}</span></p>
                    </div>
                </a>
            `
            container.append(div)
        })
    }
    if(params.has("tvInnderData")){
        const tvInnderData = JSON.parse(params.get("tvInnderData"))
        tvInnderData.forEach((ele)=>{
            let div = document.createElement("div")
            div.classList.add("tvDeal-box")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(ele.image_url)}&name=${encodeURIComponent(ele.name)}&rating=${encodeURIComponent(ele.rating)}&ratings_reviews=${encodeURIComponent(ele.ratings_reviews)}&price=${encodeURIComponent(ele.price)}&original_price=${encodeURIComponent(ele.original_price)}&discount=${encodeURIComponent(ele.discount)}&quantity=${encodeURIComponent(ele.quantity)}&delivery_time=${encodeURIComponent(ele.delivery_time)}&category=${encodeURIComponent(ele.category)}" id="tvDeal">
                    <div id="image-part">
                        <img src=${ele.image_url} alt="">
                    </div>
                    <div id="descInfo">
                        <h6 id="name" class="mb-1">${ele.name}</h6>
                        <span id="rating">${ele.rating} ★</span>
                        <p class="mb-1 mt-2"><span id="price">₹${ele.price}</span> <span id="original_price" class="mx-1">₹${ele.original_price}</span> <span id="discount">${ele.discount}</span></p>
                        <p id="delivery_time" class="mb-0">${ele.delivery_time}</p>
                    </div>
                </a>
            `
            container.append(div)
        })
    }
    if(params.has("furniInnerData")){
        const furniInnerData = JSON.parse(params.get("furniInnerData"))
        furniInnerData.forEach((ele)=>{
            let div = document.createElement("div")
            div.classList.add("furnitData-box")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(ele.image_url)}&name=${encodeURIComponent(ele.name)}&rating=${encodeURIComponent(ele.rating)}&ratings_reviews=${encodeURIComponent(ele.ratings_reviews)}&price=${encodeURIComponent(ele.price)}&original_price=${encodeURIComponent(ele.original_price)}&discount=${encodeURIComponent(ele.discount)}&quantity=${encodeURIComponent(ele.quantity)}&delivery_time=${encodeURIComponent(ele.delivery_time)}&category=${encodeURIComponent(ele.category)}" id="furnitData">
                    <div id="image-part">
                        <img src=${ele.image_url} alt="">
                    </div>
                    <div id="descInfo">
                        <h6 id="name" class="mb-1">${ele.name}</h6>
                        <span id="rating">${ele.rating} ★</span>
                        <p class="mb-1 mt-2"><span id="price">₹${ele.price}</span> <span id="original_price" class="mx-1">₹${ele.original_price}</span> <span id="discount">${ele.discount}</span></p>
                        <p id="delivery_time" class="mb-0">${ele.delivery_time}</p>
                    </div>
                </a>
            `
            container.append(div)
        })
    }
    if(params.has("electriInnerData")){
        const electriInnerData = JSON.parse(params.get("electriInnerData"))
        electriInnerData.forEach((ele)=>{
            let div = document.createElement("div")
            div.classList.add("electroData-box")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(ele.image_url)}&name=${encodeURIComponent(ele.name)}&rating=${encodeURIComponent(ele.rating)}&ratings_reviews=${encodeURIComponent(ele.ratings_reviews)}&price=${encodeURIComponent(ele.price)}&original_price=${encodeURIComponent(ele.original_price)}&discount=${encodeURIComponent(ele.discount)}&quantity=${encodeURIComponent(ele.quantity)}&delivery_time=${encodeURIComponent(ele.delivery_time)}&category=${encodeURIComponent(ele.category)}" id="electroData">
                    <div id="image-part">
                        <img src=${ele.image_url} alt="">
                    </div>
                    <div id="descInfo">
                        <h6 id="name" class="mb-1">${ele.name}</h6>
                        <span id="rating">${ele.rating} ★</span>
                        <p class="mb-1 mt-2"><span id="price">₹${ele.price}</span> <span id="original_price" class="mx-1">₹${ele.original_price}</span> <span id="discount">${ele.discount}</span></p>
                        <p id="delivery_time" class="mb-0">${ele.delivery_time}</p>
                    </div>
                </a>
            `
            container.append(div)
        })
    }
    if(params.has("groceryData")){
        const groceryData = JSON.parse(params.get("groceryData"))
        groceryData.forEach((ele)=>{
            let div = document.createElement("div")
            div.classList.add("groceryData-box")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(ele.image_url)}&name=${encodeURIComponent(ele.name)}&rating=${encodeURIComponent(ele.rating)}&ratings_reviews=${encodeURIComponent(ele.ratings_reviews)}&price=${encodeURIComponent(ele.price)}&original_price=${encodeURIComponent(ele.original_price)}&discount=${encodeURIComponent(ele.discount)}&quantity=${encodeURIComponent(ele.quantity)}&delivery_time=${encodeURIComponent(ele.delivery_time)}&category=${encodeURIComponent(ele.category)}" id="groceryData">
                    <div id="image-part">
                        <img src=${ele.image_url} alt="">
                    </div>
                    <div id="descInfo">
                        <h6 id="name" class="mb-1">${ele.name}</h6>
                        <span id="rating">${ele.rating} ★</span>
                        <p class="mb-1 mt-2"><span id="price">₹${ele.price}</span> <span id="original_price" class="mx-1">₹${ele.original_price}</span> <span id="discount">${ele.discount}</span></p>
                        <p id="delivery_time" class="mb-0">${ele.delivery_time}</p>
                    </div>
                </a>
            `
            container.append(div)
        })
    }
    if(params.has("fashionData")){
        const fashionData = JSON.parse(params.get("fashionData"))
        fashionData.forEach((ele)=>{
            let div = document.createElement("div")
            div.classList.add("fashionData-box")
            div.innerHTML = `
                <a href="description.html?image_url=${encodeURIComponent(ele.image_url)}&name=${encodeURIComponent(ele.name)}&rating=${encodeURIComponent(ele.rating)}&ratings_reviews=${encodeURIComponent(ele.ratings_reviews)}&price=${encodeURIComponent(ele.price)}&original_price=${encodeURIComponent(ele.original_price)}&discount=${encodeURIComponent(ele.discount)}&quantity=${encodeURIComponent(ele.quantity)}&delivery_time=${encodeURIComponent(ele.delivery_time)}&category=${encodeURIComponent(ele.category)}" id="fashionData">
                    <div id="image-part">
                        <img src=${ele.image_url} alt="">
                    </div>
                    <div id="descInfo">
                        <h6 id="name" class="mb-1">${ele.name}</h6>
                        <span id="rating">${ele.rating} ★</span>
                        <p class="mb-1 mt-2"><span id="price">₹${ele.price}</span> <span id="original_price" class="mx-1">₹${ele.original_price}</span> <span id="discount">${ele.discount}</span></p>
                        <p id="delivery_time" class="mb-0">${ele.delivery_time}</p>
                    </div>
                </a>
            `
            container.append(div)
        })
    }
})