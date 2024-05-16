// Auto slider
let images = document.querySelectorAll(".slides > img");
let prevButton = document.querySelector(".prev")
let nextButton = document.querySelector(".next")
let dots = document.querySelectorAll(".dots")
let counter = 0;
images.forEach((slide, index)=>{
    slide.style.left = `${index*100}%`
})
nextButton.addEventListener("click", ()=>{
    counter++;
    carousel();
    slidePoint()
})
prevButton.addEventListener("click", ()=>{
    counter--;
    carousel();
    slidePoint()
})
const carousel = () =>{
    if(counter === images.length){
        counter = 0;
    }
    if(counter < 0){
        counter = images.length - 1;
    }
    images.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
let stopCarousel;
function autoSlider(){
    stopCarousel = setInterval(() => {
        counter++;
        carousel()
        slidePoint()
    }, 2000);
}
autoSlider()
images.forEach(slide=>{
    slide.addEventListener("mouseover", ()=>{
        clearInterval(stopCarousel)
    })
})
images.forEach(slide=>{
    slide.addEventListener("mouseout", autoSlider)
})
function slidePoint(){
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
    }
    dots[counter].className += " active"
}
// phone data fetch
let phoneSlider = document.querySelector("#phone-slider-container")
function getPhoneData(){
    fetch("http://localhost:3000/phones").then((res)=>res.json()).then((phoneData)=>{
        console.log(phoneData)
        multiplePhoneCards(phoneData)
    }).catch((err)=>console.log(err))
}
getPhoneData()
function phoneCard(image, title, price, id){
    let div = `
    <a href="#">
        <div id="phoneCard" class="border phoneClick" data-id="${id}">
            <div id="image"><img src=${image} alt="" data-id="${id}" class="phoneClick"></div>
            <p class="title phoneClick mb-1 mt-3" data-id="${id}">${title}</p>
            <p class="price phoneClick mb-1" data-id="${id}">₹${price}</p>
        </div>
    </a>
    `
    return div
}
function multiplePhoneCards(data){
    let storePhoneData = data.map((el)=>phoneCard(el.image, el.title, el.price, el.id))
    phoneSlider.innerHTML = storePhoneData.join("")
}
// get phone data with p1 id
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("phoneClick")){
        postPhoneData(e.target.dataset.id)
    }
})
function postPhoneData(id){
    let store = fetch(`http://localhost:3000/phones/${id}`).then((res)=>res.json()).then((phoneData)=>{
        console.log(phoneData.phonesInnerData)
        // fetch("http://localhost:3000/all-data",{
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(phoneData.phonesInnerData),
        //   })
    }).catch((err)=>console.log(err))
    console.log(store)
}
// slider phone data
let phoneNextButton = document.querySelector("#next")
let phonePrevButton = document.querySelector("#prev")
function calculateScrollDistance() {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 480){
        return 255
    }
    else if(screenWidth <= 768){
        return 377
    }
    else{
        return 410
    }
}
phoneNextButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    phoneSlider.style.scrollBehavior = "smooth"
    phoneSlider.scrollLeft += scrollDistance
})
phonePrevButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    phoneSlider.style.scrollBehavior = "smooth"
    phoneSlider.scrollLeft -= scrollDistance
})
// top deal data fetch
let topDealData = document.querySelector("#topDeal-slider-container")
function getTdData(){
    fetch("http://localhost:3000/top-deals").then((res)=>res.json()).then((tdData)=>multipleTdCards(tdData)).catch((err)=>console.log(err))
}
getTdData()
function singletdCard(image, brand, discount){
    let div = `
        <div id="tdCard" class="border">
            <div id="image"><a href=""><img src=${image} alt=""></a></div>
            <p class="brand mb-1 mt-3">${brand}</p>
            <p class="discount mb-1">${discount}</p>
        </div>
    `
    return div
}
function multipleTdCards(tdData){
    let storeTdData = tdData.map((el)=>singletdCard(el.image, el.brand, el.discount))
    topDealData.innerHTML = storeTdData.join("")
}
// top deal data slider
let topDealNextButton = document.querySelector("#tdNext")
let topDealPrevButton = document.querySelector("#tdPrev")
function calculateScrollDistance() {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 480){
        return 255
    }
    else if(screenWidth <= 768){
        return 377
    }
    else{
        return 410
    }
}
topDealNextButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    topDealData.style.scrollBehavior = "smooth"
    topDealData.scrollLeft += scrollDistance
})
topDealPrevButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    topDealData.style.scrollBehavior = "smooth"
    topDealData.scrollLeft -= scrollDistance
})
// fashion data fetch
let fashionContainer = document.querySelector("#fashionSeller-slider-container")
function getFashionData(){
    fetch("http://localhost:3000/fashion-data").then((res)=>res.json()).then((fashionData)=>multipleFashionCards(fashionData)).catch((err)=>console.log(err))
}
getFashionData()
function singleFashionCard(image, brand, discount){
    let div = `
        <div id="fashionCard" class="border">
            <div id="image"><a href=""><img src=${image} alt=""></a></div>
            <p class="brand mb-1 mt-3">${brand}</p>
            <p class="discount mb-1">${discount}</p>
        </div>
    `
    return div;
}
function multipleFashionCards(fashionData){
    let storeFashionData = fashionData.map((el)=>singleFashionCard(el.image, el.brand, el.discount))
    fashionContainer.innerHTML = storeFashionData.join("")
}
// fashion data slider
let fashionNextButton = document.querySelector("#FashionNext")
let fashionPrevButton = document.querySelector("#FashionPrev")
function calculateScrollDistance() {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 480){
        return 255
    }
    else if(screenWidth <= 768){
        return 377
    }
    else{
        return 410
    }
}
fashionNextButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    fashionContainer.style.scrollBehavior = "smooth"
    fashionContainer.scrollLeft += scrollDistance
})
fashionPrevButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    fashionContainer.style.scrollBehavior = "smooth"
    fashionContainer.scrollLeft -= scrollDistance
})
// cricket data fetch
let cricketDataContainer = document.querySelector("#cricket-data-container")
function getCricketData(){
    fetch("http://localhost:3000/cricket-data?_limit=4").then((res)=>res.json()).then((cricketData)=>multipleCricketCards(cricketData)).catch((err)=>console.log(err))
}
getCricketData()
function singleCricketCard(image, category, discount){
    let div = `
        <div id="cricketCard" class="border">
            <div id="image"><a href=""><img src=${image} alt=""></a></div>
            <p class="category mb-1 mt-3">${category}</p>
            <p class="discount mb-1">${discount}</p>
        </div>
    `
    return div
}
function multipleCricketCards(cricketData){
    let storeCricketData = cricketData.map((el)=>singleCricketCard(el.image, el.category, el.discount))
    cricketDataContainer.innerHTML = storeCricketData.join("")
}
// fetch furniture data
let furnitureDataContainer = document.querySelector("#furniture-slider-container")
function getFurnitureData(){
    fetch("http://localhost:3000/furniture-data").then((res)=>res.json()).then((furnData)=>multipleFurnCards(furnData)).catch((err)=>console.log(err))
}
getFurnitureData()
function singleFurnCard(image, title, price){
    let div =`
        <div id="furnitureCard" class="border">
            <div id="image"><a href=""><img src=${image} alt=""></a></div>
            <p class="title mb-1 mt-3">${title}</p>
            <p class="price mb-1">${price}</p>
        </div>
    `
    return div
}
function multipleFurnCards(furnData){
    let storeFurnData = furnData.map((el)=>singleFurnCard(el.image, el.title, el.price))
    furnitureDataContainer.innerHTML = storeFurnData.join("")
}
// furniture data slider
let furnitureNextButton = document.querySelector("#furnitureNext")
let furniturePrevButton = document.querySelector("#furniturePrev")
function calculateScrollDistance() {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 480){
        return 255
    }
    else if(screenWidth <= 768){
        return 377
    }
    else{
        return 410
    }
}
furnitureNextButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    furnitureDataContainer.style.scrollBehavior = "smooth"
    furnitureDataContainer.scrollLeft += scrollDistance
})
furniturePrevButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    furnitureDataContainer.style.scrollBehavior = "smooth"
    furnitureDataContainer.scrollLeft -= scrollDistance
})
// fetch electronics data
let electronicsDataContainer = document.querySelector("#electro-slider-container")
function getEleData(){
    fetch("http://localhost:3000/electronic-data").then((res)=>res.json()).then((electroData)=>multipleEleCards(electroData)).catch((err)=>console.log(err))
}
getEleData()
function singleElectroCard(image, title, price){
    let div =`
        <div id="eletronicsCard" class="border">
            <div id="image"><a href=""><img src=${image} alt=""></a></div>
            <p class="title mb-1 mt-3">${title}</p>
            <p class="price mb-1">${price}</p>
        </div>
    `
    return div
}
function multipleEleCards(eletroData){
    let storeEletroData = eletroData.map((el)=>singleElectroCard(el.image, el.title, el.price))
    electronicsDataContainer.innerHTML = storeEletroData.join("")
}
// electronics data slider
let electroNextButton = document.querySelector("#electroNext")
let electroPrevButton = document.querySelector("#electroPrev")
function calculateScrollDistance() {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 480){
        return 255
    }
    else if(screenWidth <= 768){
        return 377
    }
    else{
        return 410
    }
}
electroNextButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    electronicsDataContainer.style.scrollBehavior = "smooth"
    electronicsDataContainer.scrollLeft += scrollDistance
})
electroPrevButton.addEventListener("click", ()=>{
    const scrollDistance = calculateScrollDistance();
    electronicsDataContainer.style.scrollBehavior = "smooth"
    electronicsDataContainer.scrollLeft -= scrollDistance
})