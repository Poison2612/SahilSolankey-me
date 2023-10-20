
function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    // parent and child both sets their respective classes
    child.classList.add("child");
    parent.classList.add("parent"); 

    //span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replace its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
    }) 
}
revealToSpan();
function valueSetter(){

    document.querySelectorAll("#Visual>g>g>path, #Visual>g>g>polyline").forEach(function(e){
        e.style.strokeDashoffset = e.getTotalLength();
        e.style.strokeDasharray = e.getTotalLength();
    });

    gsap.set("nav a", {y: "-100%", opacity: 0});
    gsap.set("#home span .child",{y: "100%"});
    gsap.set("#home .row img",{opacity: 0});
}
valueSetter();
function loadingAnimation(){
    var tl = gsap.timeline();

tl
    .from("#loader .child span", {
        x: 400,
        duration: 0.6,
        Delay: 1,
        ease: Power2.EaseInOut,
        stagger: 0.13
    })

    .to("#loader .parent .child", {
        y: "-100%",
        duration: 0.5,
        ease: Circ.EaseInOut
    })

    .to("#loader",{
        height: 0,
        duration: 0.6,
        ease: Circ.EaseInOut
    })
    .to("#green",{
        height: "0%",
        top: 0,
        duration: 0.6,
        delay: -0.6,
        ease: Circ.EaseInOut,
        onComplete: function(){ 
            homeAnimation();
        }

    })
}
loadingAnimation();
function svgAnimation(){
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.EaseInOut,
    })
    
}
function homeAnimation(){
    var tl = gsap.timeline();
    tl
    .to("nav a",{
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Expo.EaseInOut,
    })
    .to("#home span .child",{
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: Expo.easeInOut,
    })
    .to("#home .row img",{
        opacity: 1,
        duration: .5,
        onComplete: function(){
            svgAnimation();
        }
    
    })
}

