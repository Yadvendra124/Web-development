const navDialog = document.getElementById("nav-Dialog");
function handleMenu(){
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4;
const initialTranslateRTR = 36*4;
function setupIntersectionObserver(element,isLTR,speed){
    const inteersectionCallback = (enteries) => {
        const isIntersecting = enteries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }else{
            document.removeEventListener('scroll',scrollHandler);
        }

    }
    const intersectionObserver = new IntersectionObserver(inteersectionCallback);
    intersectionObserver.observe(element);



    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed;
        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate = -(translateX+initialTranslateRTR);
        }
        element.style.transform = `translateX(${totalTranslate

            
        }px)`
    }
}
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line-4");

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,true,0.8);

const dtElement = document.querySelectorAll('dt');
dtElement.forEach(element => {
    element.addEventListener('click',()=>{
        const dtId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(dtId);
        const ddArrow = element.querySelectorAll('i')[0];
        ddElement.classList.toggle('hidden');
        ddArrow.classList.toggle('-rotate-180');
    })
})