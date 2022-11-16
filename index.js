const DOMselectors = {
  Area: document.getElementsByClassName("Area"),
  Button: document.getElementsByClassName("btn"),
  Name: document.querySelector("#name"),
  Text: document.querySelector("#descript"),
  Image: document.querySelector("#image"),
};

function texts(text) {
  text.textcontent = "help";
}

DOMselectors.Button.addEventListener("click", function () {
  texts(DOMselectors.Name);
});
