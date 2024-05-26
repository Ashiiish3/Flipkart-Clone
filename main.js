// fetch add to cart data
const totalCounts = document.querySelector("#cart-count")
function getAddCartData(){
    fetch("http://localhost:3000/add-To-Cart-data").then((res)=>res.json()).then((data)=>{
        totalCounts.innerHTML = data.length
    }).catch((err)=>console.log(err))
}
getAddCartData()