window.addEventListener("load",()=>{
    const params = new URLSearchParams(window.location.search)
    const image_url = params.get("image_url")
    console.log(params.get("image_url"))
})