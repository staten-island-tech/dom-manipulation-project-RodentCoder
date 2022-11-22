const DOMselectors = {
  Area: document.getElementsByClassName("area"),
  Button: document.getElementById("btn"),
  Name: document.getElementById("name"),
  Descript: document.getElementById("descript"),
  Image: document.getElementById("image"),
  Card: document.getElementById("display"),
  Remove: document.getElementById("remove")
};

DOMselectors.Button.addEventListener("click" , function(e){
  e.preventDefault();

  let Name = DOMselectors.Name.value;
  let Descript = DOMselectors.Descript.value;

  function createcard(){

    DOMselectors.Card.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
      <h2 class="title">${Name.value}</h2>
      <h3 class="para">${Descript.value}</h3>
      <img class="img" src="${Image.value}"/>
      </div>`
    )
  }

  return createcard();
 
  
})
  
    