const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let loading = 0;

const setLoading = () => {
    loading++ 
    if(loading > 100) return

    loadingText.innerText = `${loading}%`
    loadingText.style.opacity = scale(loading, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setLoading, 20)
