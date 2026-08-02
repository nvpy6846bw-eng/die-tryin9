console.log("Die Tryin9 script loaded");
/*=========================================
    DIE TRYIN9
    Premium Gothic Effects
==========================================*/


/* Smooth Fade In */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    observer.observe(section);

});


/* Navbar Background */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        nav.style.background = "rgba(0,0,0,.95)";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.5)";

    }else{

        nav.style.background = "rgba(0,0,0,.75)";
        nav.style.boxShadow = "none";

    }

});


/* Gallery Hover Glow */

const galleryItems = document.querySelectorAll(".gallery .item");

galleryItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.boxShadow="0 0 35px rgba(179,0,0,.45)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.boxShadow="none";

    });

});


/* Hero Parallax */

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY =
    window.scrollY * 0.45 + "px";

});


/* Cursor Glow */

const glow = document.createElement("div");

glow.className="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/* Loading Animation */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
// ==========================
// ABOUT IMAGE MUSIC PLAYER
// ==========================

const aboutPicture = document.getElementById("aboutMusic");

const song = document.getElementById("brandSong");


let musicPlaying = false;


aboutPicture.addEventListener("click", function(){

    if(musicPlaying === false){

        song.play();

        musicPlaying = true;

        aboutPicture.style.boxShadow =
        "0 0 40px rgba(180,0,0,.8)";

    }

    else{

        song.pause();

        musicPlaying = false;

        aboutPicture.style.boxShadow =
        "none";

    }

});
/*==========================
GOTHIC STORM CLOUD
==========================*/


.yearLine{

    display:flex;

    align-items:center;

    justify-content:center;

    gap:15px;

}


.stormCloud{

    cursor:pointer;

}


.cloud{

    font-size:45px;

    color:#111;

    filter:drop-shadow(0 0 12px rgba(150,0,0,.8));

    transition:.4s;

    animation:cloudFloat 3s ease-in-out infinite;

}


.cloud:hover{

    transform:scale(1.2);

    filter:drop-shadow(0 0 25px red);

}


@keyframes cloudFloat{

    0%,100%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-8px);

    }

}


/* LIGHTNING FLASH */


#lightning{

    position:fixed;

    inset:0;

    background:white;

    opacity:0;

    pointer-events:none;

    z-index:9999;

}


.strike{

    animation:lightningFlash .3s ease;

}


@keyframes lightningFlash{

    0%{

        opacity:0;

    }

    30%{

        opacity:1;

    }

    50%{

        opacity:.2;

    }

    70%{

        opacity:.8;

    }

    100%{

        opacity:0;

    }

}
