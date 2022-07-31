const toggle = document.querySelector('.nav-toggle')
const barOpen=document.querySelector('.nav-list')
window.addEventListener('resize',()=>{
let width = screen.width;

    if(width < 570) {
        barOpen.classList.add('hide')
    } else {
        barOpen.classList.remove('hide')
    }
})
toggle.addEventListener('click',function(){
    
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height
    if(scrollHeight<navHeight){
        navbar.classList.add('fixed')
    }
    if(barOpen.classList.contains('show')) {
        barOpen.classList.remove('show');
        barOpen.classList.add('hide');
    } else {
        barOpen.classList.add('show');
        barOpen.classList.remove('hide');
    }
})
