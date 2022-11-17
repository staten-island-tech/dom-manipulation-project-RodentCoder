const DOMselectors = {
  Area: document.getElementsByClassName(".area"),
  Button: document.querySelector("#btn"),
  Name: document.querySelector("#name"),
  Descript: document.querySelector("#descript"),
  Image: document.querySelector("#image"),
};

function texts(text) {
  text.textcontent = "help";
}

DOMselectors.Button.addEventListener("click", function () {
  texts(DOMselectors.Name);
});
