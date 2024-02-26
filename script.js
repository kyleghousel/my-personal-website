const lists = document.getElementsByClassName("list-component");
const header = document.getElementById("main-header");

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.border = "none";
    this.style.padding = "16px";
  });
  lists[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
    this.style.border = "8px solid white";
    this.style.padding = "8px";
});
}

let isHeaderChanged = false;

header.addEventListener("click", function() {
  
  if (isHeaderChanged) {
    header.textContent = "HELLO, WORLD!"
    isHeaderChanged = false;
  } else {
    header.textContent = "👋🌎";
    isHeaderChanged = true;
  }

})