// fetch add to cart data
function getAddCartData(){
    fetch("http://localhost:3000/add-To-Cart-data").then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
getAddCartData()
function singleCard(){
    let div = `
    `
}
function multipleCards(){

}