import "./styles.css";
/*
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
}
*/

var container_div = document.createElement("div");
container_div.className = "container";

for (var x = 0; x < 5; x++) {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      let picture = data.message;
      let breed = "Chihuahua";
      create_elements(breed, picture);
    });
}

function create_elements(breed, picture) {
  //creating all the required elements
  var item = document.createElement("div");
  item.className = "wiki-item";
  var header = document.createElement("h1");
  header.className = "wiki-header";
  header.innerHTML = breed;
  var content = document.createElement("div");
  content.className = "wiki-content";
  var text = document.createElement("p");
  text.className = "wiki-text";
  var container = document.createElement("div");
  container.className = "img-container";
  var img = document.createElement("img");
  img.className = "wiki-img";
  img.src = picture;

  //appending the created elements to parentnodes and to main container div
  container.appendChild(img);
  content.appendChild(text);
  content.appendChild(container);
  item.appendChild(header);
  item.appendChild(content);
  container_div.appendChild(item);
  document.body.appendChild(container_div);
}
