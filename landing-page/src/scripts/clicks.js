const navButton = document.querySelector("[aria-controls='primary-nav']")
const primaryNav = document.querySelector("#primary-nav")

navButton.addEventListener("click",()=>{
    const isNavOpen = navButton.dataset.open === "true"
    navButton.dataset.open = !isNavOpen
    primaryNav.dataset.open = !isNavOpen
    document.body.dataset.isNavOpen = !isNavOpen
})