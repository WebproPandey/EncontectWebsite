// const { document } = require("postcss")


var hover1 =document.querySelector('#hover1')
var hover2 =document.querySelector('#hover2')
var hover3 =document.querySelector('#hover3')
var hover4 =document.querySelector('#hover4')
var hover5 =document.querySelector('#hover5')
var img = document.querySelector("#img")
 
hover1.addEventListener('click' ,function(){

    imgbox.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/10/laboratory.jpg")`;
    hover1.style.height = '25vh'
    hover2.style.height = '10vh'
    hover3.style.height = '10vh'
    hover4.style.height = '10vh'
    hover5.style.height = '10vh'
})
hover2.addEventListener('click' ,function(){

    imgbox.style.backgroundImage =`url("https://encontech.nl/wp-content/uploads/2023/10/container.jpg")`;
    hover2.style.height = '25vh'
    hover1.style.height = '10vh'
    hover3.style.height = '10vh'
    hover4.style.height = '10vh'
    hover5.style.height = '10vh'

})   
hover3.addEventListener('click' ,function(){

    imgbox.style.backgroundImage=`url("https://encontech.nl/wp-content/uploads/2023/10/pipelines.jpg")`;
    hover3.style.height = '25vh'
    hover1.style.height = '10vh'
    hover2.style.height = '10vh'
    hover4.style.height = '10vh'
    hover5.style.height = '10vh'

})   
hover4.addEventListener('click' ,function(){

    imgbox.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/10/environment.jpg")`;
    hover4.style.height = '25vh'
    hover1.style.height = '10vh'
    hover2.style.height = '10vh'
    hover3.style.height = '10vh'
    hover5.style.height = '10vh'

})
hover5.addEventListener('click' ,function(){

    imgbox.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/10/factory-plant.jpg")`;
    hover5.style.height = '25vh'
    hover1.style.height = '10vh'
    hover2.style.height = '10vh'
    hover3.style.height = '10vh'
    hover4.style.height = '10vh'
    
})
var page7 = document.querySelector("#page7")
var drage = document.querySelector("#drage")
var inline = document.querySelector("#inline")

page7.addEventListener("mousemove",function(e)
{
    drage.style.top = e.y+'px'
    drage.style.left = e.x+'px'
    
    inline.addEventListener("mouseenter",function()
    {
        drage.style.opacity = '1'
    })
    inline.addEventListener("mouseleave" ,function()
    {
        drage.style.opacity = '0'
    })
    

})
var click1 = document.querySelector("#click1")
var click2 = document.querySelector("#click2")
var click3 = document.querySelector("#click3")
var click4 = document.querySelector("#click4")
var click5 = document.querySelector("#click5")
var click6 = document.querySelector("#click6")
var click7 = document.querySelector("#click7")
var imgbox2 =document.querySelector("#imgbox2")
 
click1.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage =`url("https://encontech.nl/wp-content/uploads/2023/10/ship.jpg")`;
    click1.style.height = 'fit-content'
    click2.style.height = '10vh'
    click3.style.height = '10vh'
    click4.style.height = '18vh'
    click5.style.height = '10vh'
    click6.style.height = '10vh'
    click7.style.height = '10vh'
})
click2.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage =`url("https://encontech.nl/wp-content/uploads/2023/10/geothermal.jpg")`;
    click2.style.height = 'fit-content'
    click1.style.height = '10vh'
    click3.style.height = '10vh'
    click4.style.height = '18vh'
    click5.style.height = '10vh'
    click6.style.height = '10vh'
    click7.style.height = '10vh'

})   
click3.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage=`url("https://encontech.nl/wp-content/uploads/2023/11/Food-processing.jpg")`;
    click3.style.height = 'fit-content'
    click1.style.height = '10vh'
    click2.style.height = '10vh'
    click4.style.height = '18vh'
    click5.style.height = '10vh'
    click6.style.height = '10vh'
    click7.style.height = '10vh'

})   
click4.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/10/factory.jpg")`;
    click4.style.height = 'fit-content'
    click1.style.height = '10vh'
    click2.style.height = '10vh'
    click3.style.height = '10vh'
    click5.style.height = '10vh'
    click6.style.height = '10vh'
    click7.style.height = '10vh'

})
click5.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/10/desert.jpg")`;
    click5.style.height = 'fit-content'
    click1.style.height = '10vh'
    click2.style.height = '10vh'
    click3.style.height = '10vh'
    click4.style.height = '18vh'
    click6.style.height = '10vh'
    click7.style.height = '10vh'
    
})
click6.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/10/data.jpg")`;
    click6.style.height = 'fit-content'
    click1.style.height = '10vh'
    click2.style.height = '10vh'
    click3.style.height = '10vh'
    click4.style.height = '18vh'
    click5.style.height = '10vh'
    click7.style.height = '10vh'
})
click7.addEventListener('click' ,function(){

    imgbox2.style.backgroundImage =`url("https://encontech.nl/wp-content/uploads/2023/10/tanker.jpg")`;
    click7.style.height = 'fit-content'
    click1.style.height = '10vh'
    click2.style.height = '10vh'
    click3.style.height = '10vh'
    click4.style.height = '18vh'
    click5.style.height = '10vh'
    click6.style.height = '10vh'
})
var imgs = document.querySelector("#imgs")
var fistimg  = document.querySelector(".fistimg")
var secimg  = document.querySelector(".secimg")
var thirdimg  = document.querySelector(".thirdimg")

fistimg.addEventListener("mouseenter" ,function()
{
     imgs.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/11/photo_2023-11-11-18.27.06.jpeg")`;
})
secimg.addEventListener("mouseenter" ,function()
{
     imgs.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/09/energies-16-06791.jpg")`
})

thirdimg.addEventListener("mouseenter" ,function()
{
     imgs.style.backgroundImage = `url("https://encontech.nl/wp-content/uploads/2023/09/photo_2023-11-11-18.26.51.jpeg")`
})
function locomaotivescroll(){



    gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    }
    
locomaotivescroll();

var tl = gsap.timeline()

tl.to(".effect",
{
  opacity:1,

})
tl.to(".future",
{
 opacity:1,
 y:-20,
 delay:1
})
gsap.to("#page2 .left , #page2 .right",
{
   y:-20,
   opacity:1,
   scrollTrigger:
   {
     durastion:1,
     delay:1,
     trigger:"#page2",
     scroller:"#main",
     start:"top 80%",
     end :"top 20%",
     
     scrub:3
   }
})
 gsap.to("#page3 .heading",
 {
    y:-20,
    opacity:1,
    scrollTrigger:
    {
        delay:1,
        trigger:"#page3",
        scroller:"#main",
        start:"top 50%",
        end:"top 20%",
        // markers:true
    }
 })
gsap.to("#page4 .heading2",
{
   y:-20,
   opacity:1,
   scrollTrigger:
   {
    trigger:"#page4",
    scroller:"#main",
    start:"top 60%",
    end:"top 20%",
   } 
})
      
gsap.to("#page4 .secheading2, #page4 .down .image ",
{
    y:-20,
    opacity:1,
    scrollTrigger:
    {
      trigger:"#page4",
      scroller:"#main",
      start:"top 10%",
      end:"top 20%",
      
    }
})
     
gsap.to("#page5 .image, #page5 .right .heading3",
{
  y:-20,
  opacity:1,
  scrollTrigger:
  {
    trigger:"#page5",
    scroller:"#main",
    start:"top 50%",
    end:"top 20%",

  }  
      
      
})
gsap.to("#page6 .heading4",
{
   y:-20,
   opacity:1,
   scrollTrigger:
   {
    durastion:1,
    delay:1,
    trigger:"#page6",
    scroller:"#main",
    start:"top 40%",
    end:"top 20%",
   } 
}) 
gsap.to("#page8 .heading5",
{
    y:-20,
    opacity:1,
    scrollTrigger:
    {
        durastion:1,
        delay:1,
        trigger:"#page8",
        scroller:"#main",
        start:"top 60%",
        end:"top 20%"
    }

}) 
gsap.to("#page9 .cutting",
{
    y:-20,
    opacity:1,
    scrollTrigger:
    {
        durastion:1,
        delay:1,
        trigger:".cutting",
        scroller:"#main",
        start:"top 50%",
        end:"top 40%",

    }

})
gsap.to("#page10 .heading6",
{
    y:-20,
    opacity:1,
    scrollTrigger:
    {
      durastion:1,
      delay:1,
      trigger:".heading6",
      scroller:"#main",
      start:"top 80%",
      end:"top 20%",
    }
})
      
gsap.to("#page10 .secheading6",
{
  y:-20,
  opacity:1,
  scrollTrigger:
  {
    durastion:1,
    delay:1,
    trigger:".secheading6",
    scroller:"#main",
    start:"top 80%",
    end:"top 20%",
    
  }
})

var tl2 = gsap.timeline()
 
    
tl2.to("#fotter #first",
{
    y:-50,
    opacity:1,
    scrollTrigger:
    {
        durastion:1,
        delay:1,
        trigger:"#first",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
    
    }   
    
})

    
tl2.to("#fotter #sec",
{
    
    y:-50,
    opacity:1,
    scrollTrigger:
    {
    durastion:1,
    delay:1,
    trigger:"#sec",
    scroller:"#main",
    start:"top 80%",
    end:"top 20%",

    }
})
tl2.to("#fotter #third",
{
  y:-50,
  opacity:1,
  scrollTrigger:
  {
    durastion:1,
    dealy:1,
    trigger:"#third",
    scroller:"#main",
    start:"top 80%",
    end:"top 20%",
  }
})

var leftimg = document.querySelector("#leftscroll")
var rightimg = document.querySelector("#rightscroll")

gsap.to("#scroll #leftimg",
{
  y:-100,
  durastion:3,

  scrollTrigger:
  {
    delay:1,
    trigger:"#leftimg",
    scroller:"#main",
    start:"top 50%",
    end:"top 5%",
    scrub:0.5
  }
})
gsap.to("#scroll #rightimg",
{
y:-200,
durastion:3,
scrollTrigger:
{
delay:1,
trigger:"#rightimg",
scroller:"#main",
start:"top 50%",
end: "top 5%",
scrub:0.7,
}
})
  


    
    
    
    
    
    
    
