const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




const root=document.documentElement;
const marqueeElementsDisplayed=getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent=document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements",marqueeContent.children.lengh);

for (let i=0; i<marqueeElementsDisplayed;i++){
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
