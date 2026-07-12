console.log("Portfolio Started...");
/*==============================
LOADER
==============================*/

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},500);

});

/*==============================
CUSTOM CURSOR
==============================*/

const cursor=document.querySelector(".cursor");

const dot=document.querySelector(".cursor-dot");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

});

/* Hover Animation */

const links=document.querySelectorAll("a,button");

links.forEach(link=>{

link.addEventListener("mouseenter",()=>{

cursor.style.width="70px";
cursor.style.height="70px";
cursor.style.background="rgba(127,92,255,.15)";

});

link.addEventListener("mouseleave",()=>{

cursor.style.width="40px";
cursor.style.height="40px";
cursor.style.background="transparent";

});

});

/*==============================
STICKY NAVBAR
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==============================
MOBILE MENU
==============================*/

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menu && nav) {

    menu.addEventListener("click", () => {

        menu.classList.toggle("active");
        nav.classList.toggle("active");

    });

}
/*==============================
GSAP
==============================*/

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

}

/* Hero */

gsap.to(".hero-content",{

opacity:1,

y:0,

duration:1,

ease:"power3.out"

});

gsap.to(".hero-image",{

opacity:1,

y:0,

duration:1.2,

delay:.2,

ease:"power3.out"

});

/* About */

gsap.to(".about",{

scrollTrigger:{

trigger:".about",

start:"top 80%"

},

opacity:1,

y:0,

duration:1

});

/* Expertise */

gsap.to(".expertise",{

scrollTrigger:{

trigger:".expertise",

start:"top 80%"

},

opacity:1,

y:0,

duration:1

});

/* Projects */

gsap.to(".projects",{

scrollTrigger:{

trigger:".projects",

start:"top 80%"

},

opacity:1,

y:0,

duration:1

});

/* Experience */

gsap.to(".experience",{

scrollTrigger:{

trigger:".experience",

start:"top 80%"

},

opacity:1,

y:0,

duration:1

});

/* Contact */

gsap.to(".contact",{

scrollTrigger:{

trigger:".contact",

start:"top 80%"

},

opacity:1,

y:0,

duration:1

});

/*==============================
COUNTER
==============================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/80;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});
/*==============================
SKILL PROGRESS ANIMATION
==============================*/

const progressBars = document.querySelectorAll(".progress-fill");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width =
getComputedStyle(entry.target).width;

}

});

});

progressBars.forEach(bar=>{

bar.style.width="0";

observer.observe(bar);

});
/*==============================
TIMELINE REVEAL
==============================*/

const timelineItems =
document.querySelectorAll(".timeline-item");

const timelineObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

timelineItems.forEach(item=>{

item.classList.add("hidden");

timelineObserver.observe(item);

});
/*==============================
SCROLL PROGRESS
==============================*/

const progressBar = document.querySelector(".scroll-progress");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}
/*==============================
SCROLL TOP
==============================*/

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==============================
PROJECT FILTER
==============================*/

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

if (filterBtns.length > 0 && projects.length > 0) {

    filterBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            filterBtns.forEach(button => {
                button.classList.remove("active");
            });

            btn.classList.add("active");

            const filter = btn.dataset.filter;

            projects.forEach(project => {

                if (filter === "all" || project.dataset.category === filter) {

                    project.style.display = "block";

                } else {

                    project.style.display = "none";

                }

            });

        });

    });

}

