const buttons = document.querySelectorAll(".button-on img");
console.log(buttons);
const image = document.getElementsByTagName("img");
console.log(image);
const imageClick = document.getElementsByClassName("inner-image1");
buttons.forEach(img=>{
    img.addEventListener("mouseenter",()=>{
        image[3].src = img.src
    })
})