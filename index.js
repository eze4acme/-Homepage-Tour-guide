const spanEl =document.querySelector('span')

setInterval(() => {
    spanEl.style.visibility = spanEl.style.visibility === 'hidden' ? 'visible' : 'hidden'
    spanEl.style.backgroundColor = 'purple'
}, 500);