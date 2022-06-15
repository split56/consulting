const toggle = document.querySelector('.nav-toggle')
const barOpen=document.querySelector('.nav-inner-container')
toggle.addEventListener('click',function(){
    barOpen.classList.toggle('show');
})