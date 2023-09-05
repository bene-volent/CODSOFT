const header = document.querySelector(".header")
window.addEventListener("scroll",()=>{
    if (window.scrollY < 125){
        header.dataset.onTop = true;
    }else{
        header.dataset.onTop = false
    }
})