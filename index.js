const DOMselectors = {
  Area: document.getElementsByClassName("area"),
  Button: document.getElementById("btn"),
  Name: document.getElementById("name"),
  Descript: document.getElementById("descript"),
  Image: document.getElementById("image"),
  Card: document.getElementById("display"),
  Remove: document.getElementById("remove")
};


  function creation(card) {
    DOMselectors.Card.insertAdjacentHTML(
      "afterbegin",`
      <div class="display ${card.id}">
      <h2 class="Name">${card.name}</h2>
      <h3 class="Text">${card.text}</h3>
      <img class="img" src = "${card.img}"/>
      </br>
      </br>
      <button class ="remove btn">Remove</button> 
      </div>
      `
    );
    document.querySelector(".remove.btn").addEventListener("click", (event2) => {
      removecard(card)
    })
  }

  function removetext() {
    DOMselectors.Name.value = ""
    DOMselectors.Descript.value= ""
    DOMselectors.Image.value=" "
  }

  function readData() {
    const card = {
      name: DOMselectors.Name.value,
      text: DOMselectors.Descript.value,
      img: DOMselectors.Image.value,
      
    }
    creation(card)
    removetext()
  }
  
  function removecard(card) {
    document.querySelector(`.${card.id}`).remove()
  }

  DOMselectors.Button.addEventListener("click", (event) => {
    event.preventDefault()
    readData()
  })
    