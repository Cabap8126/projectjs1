const buttons = document.querySelectorAll(".button-on img");
const image = document.getElementsByTagName("img");
buttons.forEach(img=>{
    img.addEventListener("mouseenter",()=>{
        image[3].src = img.src
    })
    img.addEventListener("mouseleave",()=>{
        image[3].src = "";
    })
})