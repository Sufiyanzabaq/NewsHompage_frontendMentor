
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const popUpMenu = document.querySelector(".controls")

menuIcon.addEventListener("click", ()=> {
    popUpMenu.style.transform = "translateX(0)"
})

closeIcon.addEventListener("click", ()=> {
    popUpMenu.style.transform = "translateX(100%)"
})
