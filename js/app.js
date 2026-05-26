// =====================
// SMOOTH NAVIGATION
// =====================

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=
document.querySelector(
link.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});




// =====================
// HEADER EFFECT
// =====================

const header=
document.querySelector("header");


window.addEventListener(
"scroll",

()=>{

if(window.scrollY>40){

header.style.padding=
"12px 6%";

header.style.background=
"rgba(255,255,255,.92)";

header.style.boxShadow=
"0 10px 30px rgba(0,0,0,.05)";

}

else{

header.style.padding=
"18px 6%";

header.style.background=
"white";

header.style.boxShadow=
"none";

}

}

);




// =====================
// REVEAL EFFECT
// =====================

const sections=
document.querySelectorAll(
".services,.why,.contact"
);



const reveal=()=>{

sections.forEach(section=>{

const top=
section.getBoundingClientRect().top;


if(top<window.innerHeight-120){

section.style.opacity=1;

section.style.transform=
"translateY(0)";

}

});

};



window.addEventListener(
"scroll",
reveal
);


reveal();




// =====================
// SERVICE CARDS
// =====================

document
.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener(
"mouseenter",

()=>{

card.style.transform=
"translateY(-8px)";

}

);


card.addEventListener(
"mouseleave",

()=>{

card.style.transform=
"translateY(0)";

}

);

});




// =====================
// PAGE FADE
// =====================

document.body.style.opacity=0;



window.addEventListener(
"load",

()=>{

document.body.style.transition=
".6s";

document.body.style.opacity=1;

});

document
.querySelectorAll("a,.card")
.forEach(el=>{

el.addEventListener("mouseenter",()=>{

document.body.style.cursor="pointer";

});

});
