/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,.85)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-item h2");

const runCounter = () => {

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(
            targetText.replace(/\D/g, "")
        );

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (current < target) {

                current += increment;

                counter.innerText =
                    Math.ceil(current) +
                    targetText.replace(/[0-9]/g, '');

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = targetText;

            }

        };

        updateCounter();

    });

};

const statSection = document.querySelector(".stats");

const statObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

runCounter();
statObserver.disconnect();

}

});

},

{
threshold:0.5
}

);

statObserver.observe(statSection);


/* ==========================
   REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
"section, .service-card, .client-card"
);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.15
}

);

revealElements.forEach(el=>{

el.classList.add("hidden");
revealObserver.observe(el);

});


/* ==========================
   ACTIVE MENU
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== `#${current}`
){

link.classList.add("active");

}

});

});


/* ==========================
   SCROLL TOP BUTTON
========================== */

const scrollBtn =
document.createElement("button");

scrollBtn.classList.add("scroll-top");

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

scrollBtn.classList.add("visible");

}else{

scrollBtn.classList.remove("visible");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load",()=>{

const loader =
document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},600);

}

});


/* ==========================
   PARALLAX HERO
========================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let scroll = window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

});
