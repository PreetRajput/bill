
document.addEventListener('DOMContentLoaded',()=>{

    let divi= document.querySelectorAll("#divi");
    let divil= document.querySelectorAll("#divil");
    let evil= document.querySelector("#evil");

    console.log(divi[0]);
    
    for (let index = 0; index < 2; index++) {

        setTimeout(() => {
            divi[index].classList.remove("animate")
            divi[index].classList.add("rotate")
        
        }, 1000);
        
    }

    for (let index = 0; index < 2; index++) {

        setTimeout(() => {
            divil[index].classList.remove("animate")
            divil[index].classList.add("rotateDif")
        
        }, 1000);
        
    }

    setTimeout(() => {
        evil.classList.remove("animate")
        evil.classList.add("bounce")
    
    }, 1000);
})


