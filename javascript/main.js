//priloder
var priloders = document.getElementById('priloder');
function myFunction(){
  priloders.style.display = "none";
  
}
//Gallary Items Filter.....
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i=0;i<filterButtons.length;i++) {
    filterButtons[i].addEventListener("click",function(){
        for (let j=0;j<filterButtons.length; j++) {
    filterButtons[j].classList.remove("active");
            }

        this.classList.add("active");
        let target = (this.getAttribute("data-target")) 
        for (let k = 0; k<items.length; k++) {
          items[k].style.display="none"
          if(target==items[k].getAttribute("data-id")) 
          {
            items[k].style.display="block"
          }
          if (target=="all") 
          {
            items[k].style.display="block"
          }     
        }
      })
    }


   /*close button function*/

   const closeLightbox=document.querySelector(".close-lightbox")
   const lightbox = document.querySelector(".lightbox")
   const lightboxImg = lightbox.querySelector("img")
   
   lightbox.addEventListener("click",function(){
     if(event.target!=lightboxImg)
     {
       lightbox.classList.remove("show")
       lightbox.classList.add("hide")

     }
   })

   closeLightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");
     lightbox.classList.add("hide");
      
   });

   /*click to pluse icone show image big*/
   const gallery = document.querySelector(".portfolio-gallery")
   const galleryItems = gallery.querySelectorAll(".items");

   galleryItems.forEach(function (element) {
    element.querySelector(".fa-plus").addEventListener("click",function() {
      lightbox.classList.add("show");
      lightbox.classList.remove("hide");
     lightboxImg.src= element.querySelector("img").getAttribute("src")
    
     // console.log(lightboxImg)
    }) 
   })

   /*change image source from light box*/
  
   /*when scroll header fixed*/
   window.onscroll=function(){
    const doScrollTop =document.documentElement.scrollTop;

    if(window.innerWidth>991)
    {
      document.getElementById("fix").style.backgroundColor="transparent";
    }
    if(doScrollTop>100)
    {
      document.getElementById("fix").style.backgroundColor="#ffffff";
    }
    else{
      document.getElementById("fix").style.background="none"
    }
  }
  console.log(window.innerWidth>991)

    //nav links
    const navbar = document.querySelector(".navbar")
    a = navbar.querySelectorAll("a")

    a.forEach(function (element) {
      element.addEventListener("click",function () {
        for (let i = 0; i < a.length; i++) {
         a[i].classList.remove("active")          
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show")
      })
    })
    console.log(a.forEach)

  //ham-burgur menu onclick show functionality
  const hmenu = document.querySelector("ham-burger");
  hmenu.addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("show");
    alert("hello");
  })

//js




//console.log(document.querySelector(".navbar").classList.toggle("show"))
   /* comment code to fixed header */
  /* const doScrollTop=document.documentElement.scrollTop;
   if(window.innerWidth>991)
     {
     if(doScrollTop>100)
     {
      document.querySelector("header").classList.add("stik")
     }
     else{ 
       document.querySelector("header").classList.remove("stik")
     }
   }*/