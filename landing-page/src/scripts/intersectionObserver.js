const loadOnScroll = document.querySelectorAll(".load-on-scroll")


const intersectionObserver = new IntersectionObserver(
    (entries,observer)=>{
        entries.forEach(entry=>{
            if (!entry.isIntersecting){
                return
            }
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
        })
    },{
        root:null,
        threshold:0.2,
    }
)

loadOnScroll.forEach(el=>intersectionObserver.observe(el))