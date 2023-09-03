const observables = document.querySelectorAll(".load-on-scroll")

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
        if (el.classList.contains("skills-graph")){
            el.classList.add("expand-on-scroll")
        }
        else
        el.classList.add("is-visible")
        observer.unobserve(el)
        
    })

}

const intersectionObserver = new IntersectionObserver(
    ObserverCallback,ObserverOptions
)

observables.forEach(observable => {
    intersectionObserver.observe(observable)
})