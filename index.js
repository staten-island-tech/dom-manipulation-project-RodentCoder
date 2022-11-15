const DOMselectors = {
  Area: document.getElementsByClassName("Area"),
  Button: document.getElementsByClassName("click"),
  Name: document.querySelector("#name"),
  Text: document.querySelector("#text"),
  Image: document.querySelector("#image"),
};

function test(backgound, text) {
  backgound.style.backgoundcolor = "red";
  text.textContent = "test";
}

DOMselectors.Button.addEventListener("click", function () {
  test(DOMselectors.Area, DOMselectors.text);
});
