const checkbox = document.getElementById("checkbox");

const iconCheck = checkbox.children[0].children[0];
const iconDash = checkbox.children[0].children[1];

function verificaTodos() {
  let tem = 0;
  for (let i = 2; i < checkbox.children.length; i++) {
    if (checkbox.children[i].classList.contains("b-green-all"))
      tem++;
  }
  return tem;
}

function selecionarTodos(e) {
  let tem = verificaTodos();
  if(e.classList.contains("b-green-semi"))
    e.classList.remove("b-green-semi");
  e.classList.toggle("b-green-all");
  e.children[0].classList.toggle("d-none"); // icon Check
  for (let i = 2; i < checkbox.children.length; i++) {
    if(tem == 0) {
      checkbox.children[i].classList.add("b-green-all");
      checkbox.children[i].children[0].classList.remove("d-none");
    }
    else if (tem > 0 && tem < checkbox.children.length - 2) {
      checkbox.children[i].classList.add("b-green-all");
      checkbox.children[i].children[0].classList.remove("d-none");
      iconCheck.classList.remove("d-none");
      iconDash.classList.add("d-none");
    }
    else {
      checkbox.children[i].classList.remove("b-green-all");
      checkbox.children[i].children[0].classList.add("d-none");
    }
  }
}

function selecionar(e) {
  e.classList.toggle("b-green-all");
  e.children[0].classList.toggle("d-none");
  let tem = verificaTodos();
  
  if(tem == checkbox.children.length - 2) {
    checkbox.children[0].classList.remove("b-green-semi");
    checkbox.children[0].classList.add("b-green-all");
    iconCheck.classList.remove("d-none");
    iconDash.classList.add("d-none");
  }
  else if(tem == 0) {
    checkbox.children[0].classList.remove("b-green-semi");
    checkbox.children[0].classList.remove("b-green-all");
    iconDash.classList.add("d-none");
  }
  else {
    checkbox.children[0].classList.remove("b-green-all");
    checkbox.children[0].classList.add("b-green-semi");
    iconCheck.classList.add("d-none");
    iconDash.classList.remove("d-none");
  }
}