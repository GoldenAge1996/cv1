const menuBtn = document.querySelector(".menu-btn")  ;
const lines = document.querySelectorAll(".lines")
const menu = document.querySelector(".menu") 
const menuUl = document.querySelector(".menuul") 
const pics = document.querySelector(".pics")
const menuList = document.querySelectorAll(".list") 


let showMe = false;


menuBtn.addEventListener("click", toggleUl);

function toggleUl(){
    if(!showMe){
        let showMe = true;
        menuBtn.classList.toggle("close");
        lines.forEach(line => {
            line.classList.toggle("close")
        });
        menu.classList.toggle("show");
        menuUl.classList.toggle("show");
        pics.classList.toggle("show")
        menuList.forEach(list => {
            list.classList.toggle("show")
        });

    } else if(showMe){
        let showMe = false;
        menuBtn.classList.remove("close");
        lines.forEach(line => {
            line.classList.toggle("close")
        });
        menuPics.classList.remove("show");
        menuUl.classList.remove("show");
        menuList.forEach(list => {
            list.classList.remove("show")
        });

    }
}



 //for scrolling

 var boxes = document.querySelectorAll(".on");

 window.addEventListener("scroll", checkBox);
 
 
 
 function checkBox(){
     var triggerT = window.innerHeight/5*2;
     
     boxes.forEach(box => {
         var boxPoint = box.getBoundingClientRect().top;
 
         if(boxPoint < triggerT){
             box.classList.add("active");
         }else{
             box.classList.remove("active");
         }
     });
 }
 
 

// //For The Images

// const phot = document.querySelector(".imgs");
// const left = document.getElementById("left");
// const right = document.getElementById("right");

// const photos = document.querySelectorAll(".photo");


// let idx = 0;


// let interval = setInterval(run, 2000);

// function run (){
//     idx++
//     changeImage()
// }

// function changeImage(){
// if(idx > photos.length -1 ){
//     idx = 0
    
// }else if(idx <0){
//     idx = photos.length -1
// }

// phot.style.transform = `translateX(${-idx * 500}px)`
// }


// function clear (){
//     clearInterval()
//     setInterval(run, 2000);
// }

// right.addEventListener("click", ()=>{
//     clear()
//     idx++
//     changeImage()
// })

// left.addEventListener("click", ()=>{
//     clear()
//     idx--
//     changeImage()
// })
















//For the typewriter effect



const TypeWriter = function (txtElement, words, wait = 1000){
    this.txtElement = txtElement
    this.words = words
    this.txt = ''
    this.wordIndex = 0
    this.wait = parseInt(wait,10)
    this.isDeleting = false
    this.type()
    }
    
    
    TypeWriter.prototype.type = function () {
       const current = this.wordIndex % this.words.length
       const fulltxt = this.words[current]
    
        if(this.isDeleting){
            this.txt = fulltxt.substring(0, this.txt.length -1)
        }else{
            this.txt = fulltxt.substring(0, this.txt.length + 1)
        }

        this.txtElement.innerHTML = `<span class ="txt">${this.txt}</span>`
    
    let typeSpeed = 100
    if(this.isDeleting){
        typeSpeed *=2
    }

    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait
        this.isDeleting = true
    } else if(this.isDeleting && this.txt === ""){
        this.isDeleting = false
        this.wordIndex++
        typeSpeed = 200
    }
    
    
    
       setTimeout(()=> this.type(), typeSpeed)
    }
    
    
    
    document.addEventListener("DOMContentLoaded", init)
    
    function init(){
        const txtElement = document.querySelector(".txt-element")
        const words = JSON.parse(txtElement.getAttribute("data-words")) 
        const wait = txtElement.getAttribute("data-wait")
    
        new TypeWriter(txtElement, words, wait)
    }






   