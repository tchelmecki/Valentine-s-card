const envelope = document.querySelector(".envelope");
const buttonContainer = document.querySelector(".buttons-container");
const cart = document.querySelector(".cart");
const triangle1 = document.querySelector(".triangle1");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const foto1 = document.querySelector(".foto1");
const foto2 = document.querySelector(".foto2");
const confettiContainer = document.querySelector('.confetti-container');
const iknw = document.querySelector('.iknw');
let isClicked = false;
let noCounter = 0;

function createHeart() {
    for (let i = 0; i < 50; i++) { 
        let heart = document.createElement("ion-icon");
        heart.setAttribute("name", "heart");
        heart.classList.add("heart");

        let randomX = Math.random() * 80 + 10; 
        let randomY = Math.random() * 60 + 20; 
        let randomSize = Math.random() * 20 + 10; 
        let randomRotate = Math.random() * 20;

        heart.style.position = "absolute"; 
        heart.style.left = `${randomX}%`;
        heart.style.top = `${randomY}%`;
        heart.style.fontSize = `${randomSize}px`;
        heart.style.rotate = `${randomRotate}deg`;

        cart.appendChild(heart);
    }
}

function confetti(){
    for (let i = 0; i < 200; i++) { 
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const randomX = Math.random() * 100;  
        const randomDelay = Math.random() * 0.5; 

        const colors = ['#fd9ed0', '#ffb7dd', '#fdd2e8', '#ffeef7'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.backgroundColor = randomColor;
        confetti.style.left = `${randomX}%`;
        confetti.style.animationDelay = `${randomDelay}s`;

        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

envelope.addEventListener("click",()=>{
    if(!isClicked){
        buttonContainer.classList.add("active");
        triangle1.classList.add("openLetter");
        cart.classList.add("open");
        createHeart();
    }
    isClicked = true;
})

no.addEventListener("mouseenter", () => {
    const randomX = Math.random() * window.innerWidth-100;
    const randomY = Math.random() * window.innerHeight-100; 

    no.style.position = "absolute";
    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;

    noCounter += 1;
    if(noCounter == 7){
        no.style.opacity = 0;
    }
});

yes.addEventListener("click", ()=>{
    foto1.classList.add("active");
    foto2.classList.add("active");
    yes.style.opacity = 0;
    no.style.opacity = 0;
    iknw.style.opacity = 1
    confetti();
})


