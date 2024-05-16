// fetch all data
let allDataContainer = document.querySelector("#allDataBox")
function getAllData(){
    fetch("http://localhost:3000/all-data").then((res)=>res.json()).then((data)=>multipleAllDataCard(data)).catch((err)=>console.log(err))
}
getAllData()
function singleAllDataCard(image_url, name, price){
    let div = `
        <div>
            <img src=${image_url} alt="">
            <h4>${name}</h4>
            <p>${price}</p>
        </div>
    `
    return div
}
function multipleAllDataCard(data){
    let storeData = data.map((el)=>singleAllDataCard(el.image_url, el.name, el.price))
    allDataContainer.innerHTML = storeData.join("")
}
