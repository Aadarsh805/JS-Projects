const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const circles = document.querySelectorAll('.circle')

const bar = document.querySelector('.progress__bar')

let active = 1

next.addEventListener('click', () => {
    active++
    
    if(active > circles.length){
        active = circles.length
    }
    updateDom()
})

prev.addEventListener('click', () => {
    active--

    if(active < 1){
        active = 1
    }
    updateDom()
})

const updateDom = () =>{
    circles.forEach((circle, index) => {
        if(active > index){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
        const actives = document.querySelectorAll('.active')

        bar.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

        if(active === circles.length){
            next.disabled = true
        }else if(active === 1){
            prev.disabled = true
        }else{
            next.disabled = false
            prev.disabled =  false
        }
    })
}