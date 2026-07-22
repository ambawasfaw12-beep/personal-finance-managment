const responsiveBtn = document.getElementById("responsiveBtn")
const overlay = document.querySelector(".overlay")
const hidden = document.querySelector(".hidden")

function openDrawer(){
    overlay.classList.add("open")
    hidden.classList.add("open")
}

function closeDrawer(){
        overlay.classList.remove("open")
    hidden.classList.remove("open")
}

responsiveBtn.addEventListener("click", ()=>{
   openDrawer()
})

overlay.addEventListener("click", ()=>{
    closeDrawer()
})