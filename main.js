// fetch add to cart data
const totalCounts = document.querySelector("#cart-count")
function getAddCartData(){
    fetch("https://shark-tank-json-server-xakg.onrender.com/add-To-Cart-data").then((res)=>res.json()).then((data)=>{
        totalCounts.innerHTML = data.length
    }).catch((err)=>console.log(err))
}
getAddCartData()