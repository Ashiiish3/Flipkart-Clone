let allProducts = document.querySelector(".all-products")
window.addEventListener("load", ()=>{
    if(JSON.parse(localStorage.getItem('phoneData')).length == 20){
        const phoneData = JSON.parse(localStorage.getItem('phoneData'));
        document.querySelector("#productCount").innerText = phoneData.length
        phoneData.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("product-box")
            div.innerHTML = `
                <a href="alldata.html?phonesInnerData=${encodeURIComponent(JSON.stringify(ele.phonesInnerData))}" class="text-dark text-decoration-none">
                    <div id="phoneCard">
                        <div id="image"><img src=${ele.image} alt=""></div>
                        <p class="title mb-0 mt-1">${ele.title}</p>
                        <p class="price mb-1">₹${ele.price}</p>
                    </div>
                </a>
            `
            allProducts.append(div)
        });
    }
    if(JSON.parse(localStorage.getItem('phoneData')).length == 12){
        const phoneData = JSON.parse(localStorage.getItem('phoneData'));
        document.querySelector("#productCount").innerText = phoneData.length
        phoneData.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("product-box")
            div.innerHTML = `
                <a href="alldata.html?dealInnerData=${encodeURIComponent(JSON.stringify(ele.dealInnerData))}" class="text-dark text-decoration-none">
                    <div id="phoneCard">
                        <div id="image"><img src=${ele.image} alt=""></div>
                        <p class="title mb-0 mt-1">${ele.brand}</p>
                        <p class="price mb-1">${ele.discount}</p>
                    </div>
                </a>
            `
            allProducts.append(div)
        });
        console.log(phoneData)
    }
    if(JSON.parse(localStorage.getItem('phoneData')).length == 10){
        const phoneData = JSON.parse(localStorage.getItem('phoneData'));
        document.querySelector("#productCount").innerText = phoneData.length
        phoneData.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("product-box")
            div.innerHTML = `
                <a href="alldata.html?tvInnderData=${encodeURIComponent(JSON.stringify(ele.tvInnderData))}" class="text-dark text-decoration-none">
                    <div id="phoneCard">
                        <div id="image"><img src=${ele.image} alt=""></div>
                        <p class="title mb-0 mt-1">${ele.title}</p>
                        <p class="price mb-1">₹${ele.price}</p>
                    </div>
                </a>
            `
            allProducts.append(div)
        });
    }
    if(JSON.parse(localStorage.getItem('phoneData')).length == 13){
        const phoneData = JSON.parse(localStorage.getItem('phoneData'));
        console.log(phoneData)
        document.querySelector("#productCount").innerText = phoneData.length
        phoneData.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("product-box")
            div.innerHTML = `
                <a href="#" class="text-dark text-decoration-none">
                    <div id="phoneCard">
                        <div id="image"><img src=${ele.image} alt=""></div>
                        <p class="title mb-0 mt-1">${ele.category}</p>
                        <p class="price mb-1">${ele.discount}</p>
                    </div>
                </a>
            `
            allProducts.append(div)
        });
    }
    if(JSON.parse(localStorage.getItem('phoneData')).length == 15){
        const phoneData = JSON.parse(localStorage.getItem('phoneData'));
        document.querySelector("#productCount").innerText = phoneData.length
        phoneData.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("product-box")
            div.innerHTML = `
                <a href="alldata.html?furniInnerData=${encodeURIComponent(JSON.stringify(ele.furniInnerData))}" class="text-dark text-decoration-none">
                    <div id="phoneCard">
                        <div id="image"><img src=${ele.image} alt=""></div>
                        <p class="title mb-0 mt-1">${ele.title}</p>
                        <p class="price mb-1">${ele.price}</p>
                    </div>
                </a>
            `
            allProducts.append(div)
        });
    }
    if(JSON.parse(localStorage.getItem('phoneData')).length == 11){
        const phoneData = JSON.parse(localStorage.getItem('phoneData'));
        document.querySelector("#productCount").innerText = phoneData.length
        phoneData.forEach((ele) => {
            let div = document.createElement("div")
            div.classList.add("product-box")
            div.innerHTML = `
                <a href="alldata.html?electriInnerData=${encodeURIComponent(JSON.stringify(ele.electriInnerData))}" class="text-dark text-decoration-none">
                    <div id="phoneCard">
                        <div id="image"><img src=${ele.image} alt=""></div>
                        <p class="title mb-0 mt-1">${ele.title}</p>
                        <p class="price mb-1">${ele.price}</p>
                    </div>
                </a>
            `
            allProducts.append(div)
        });
    }
})