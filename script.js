const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

//our cards
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  //console.log("card start draggin");
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  this.classList.add("is-dragging"); //this referencia cards.foreach
}

function drag() {
  //console.log("dragging");
}

function dragend() {
  //console.log(" stop drag end");
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("is-dragging"); //this referencia cards.foreach
}

//place where we will drop cards
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});
function dragenter() {
  console.log("entrou zona drop");
}
function dragover() {
  console.log("estou na zona");
  this.classList.add("over");
  const cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged); //adicionamos o card que esta sendo arrastado
}
function dragleave() {
  console.log("saiu");
  this.classList.remove("over");
}
function drop() {
  console.log("chegou na zona");
}
