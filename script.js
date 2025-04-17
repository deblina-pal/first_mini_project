const count=document.querySelector('.count')
const minus_btn=document.querySelector('.minus-btn')
const plus_btn = document.querySelector('.plus-btn')
const scale = document.querySelector('.scale')
const reset_btn = document.querySelector('.reset-btn')

minus_btn.addEventListener('click',() =>{
    const count_value = parseInt(count.innerText)
    const scale_value = parseInt(scale.value)
    count.innerText = count_value - scale_value
})

plus_btn.addEventListener('click',() => {
    const count_value = parseInt(count.innerText)
    const scale_value = parseInt(scale.value)
    count.innerText = count_value + scale_value
})

reset_btn.addEventListener('click',() =>{
    count.innerText = 0
    scale.value = 1
})