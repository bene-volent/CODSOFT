const observables = document.querySelectorAll(".show-on-scroll")

const ObserverOptions = {
    root:null,
    threshold:0.2
}

const ObserverCallback = (entries,observer) =>{

    entries.forEach(entry => {
        if (!entry.isIntersecting)
            return
        
            const el = entry.target
            // console.log(el)
        el.classList.add("showed-on-scroll")
        observer.unobserve(el)
        
    })

}

const intersectionObserver = new IntersectionObserver(
    ObserverCallback,ObserverOptions
)

observables.forEach(observable => {
    intersectionObserver.observe(observable)
})