let btns = document.querySelector("button");
btns.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomcolour = getRandomColour();
    h3.innerText = randomcolour;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolour;

    console.log("Colour Update..")
});
function getRandomColour() {
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    let colour = `rgb(${red} , ${green} ,${blue})`
    return colour
}