// fetch all data
let container = document.querySelector("#allDataBox")
window.addEventListener("load", ()=>{
    const params = new URLSearchParams(window.location.search)
    const phonesInnerData = JSON.parse(params.get("phonesInnerData"))
    phonesInnerData.forEach(element => {
        let div = document.createElement("div")
        div.innerHTML = `
            <img src=${element.image_url} alt="" id="image-Data">
            <h4 id="name">${element.name}</h4>
            <p id="price_data">${element.price}</p>
        `
        container.append(div)
    });
})