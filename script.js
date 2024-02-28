const lists = document.getElementsByClassName("list-component");
const header = document.getElementById("main-header");
const headerText = document.getElementById("header-text")

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.5s ease"
    this.style.border = "none";
    this.style.padding = "16px";
  });
  lists[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.7s ease"
    this.style.border = "8px solid white";
    this.style.padding = "8px";

});
};

header.addEventListener("mouseover", function() {
  header.style.cursor = "pointer";
});

let isHeaderChanged = false;
let headerContent = header.innerHTML;

header.addEventListener("click", function() { 
  if (isHeaderChanged) {
    headerText.textContent = "HELLO, WORLD!";
    isHeaderChanged = false;
  } else {
    headerText.textContent = "IT'S ME, KYLE.";
    isHeaderChanged = true;
  }
});