//-------The mobile view of the menu list----------------------
function displayMenu(e){
    let menuList = document.getElementById('menu')

    if(menuList.classList.contains('hidden')){
        menuList.classList.remove('hidden')
        e.name = 'close'
    }else{
        menuList.classList.add('hidden')
        e.name = 'menu'
    }
}

//--------Applying some styles to the navbar when scrolled----------
let navbar = document.getElementById('navbar')
let swiperCards = document.getElementById('swiper')
window.onscroll = () =>{
    if(window.scrollY > 100){
        navbar.classList.add('sticky', 'bg-blue-950')
    }else{
        navbar.classList.remove('sticky', 'bg-blue-950')
    }

    if(window.scrollY > 1200 && window.innerWidth > 1000) swiperCards.classList.add('-z-30')
    else swiperCards.classList.remove('-z-30')
}

//-------Working on the view more button of the testimonials section


function viewMore(button){
    let testimonialId = button.dataset.testimonialId;
    let moreText = document.getElementById(`more${testimonialId}`)

    if(moreText.classList.contains('hidden')){
        moreText.classList.remove('hidden')
        button.innerText = 'View less'
    }else{
        moreText.classList.add('hidden')
        button.innerText = 'View more'
    }
}
document.querySelectorAll('.view-more-button').forEach(button =>{
    button.addEventListener('click',()=>{
        viewMore(button)
    })
})

//--------------Working on the swiper testimonials section
    const swiper = new Swiper('.swiper',{
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        grabCursor : true,
        navigation:{
            nextEl :'.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints:{
            1070:{
                slidesPerView: 3,
            },
            500:{
                slidesPerView:2,
            }
        },
        pagination:{
            el:'.swiper-pagination',
            clickable: true,
            dynamicBullets:true,
            loop:true
        }
    })

//------function to deal with the showing of answers in the blog section

    let questions = document.querySelectorAll('.question')
    
    questions.forEach(question => {
        question.addEventListener('click',function(){
            let answer = question.nextElementSibling
            let arrow = question.childNodes[1]
            
            if(answer.classList.contains('hidden')){
                answer.classList.remove('hidden')
                arrow.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
             }else{
                answer.classList.add('hidden')
                arrow.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
            }
        })
    })
    
