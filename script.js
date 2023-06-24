//Create grid
const grid = document.getElementById("grid")
function createGrid(size){
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  for(i = 0; i < size * size; i++){
    let gridItem = document.createElement("div");
    gridItem.addEventListener("mouseover", changeColor)
    gridItem.addEventListener("mousedown", changeColor)
    grid.appendChild(gridItem).className = "grid-item";
  }
}
createGrid(16);

//Make grid drawable
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}


//Make color change function
const colorPicker = document.getElementById("color-picker")
const defaultColorBtn = document.getElementById("def-color--btn")
const randomColorBtn = document.getElementById("rand-color--btn")
const defaultColor = "#333"
let selectedColor = defaultColor
  //Get random color
function getRandomColor() {
  const randomIndexR = Math.round(Math.random() * 256)
  const randomIndexG = Math.round(Math.random() * 256)
  const randomIndexB = Math.round(Math.random() * 256)
  return `rgba(${randomIndexR},${randomIndexG},${randomIndexB})`
}
  //Change color
defaultColorBtn.addEventListener("click", () => {
  selectedColor = defaultColor
})
randomColorBtn.addEventListener("click", () => {
  selectedColor = getRandomColor()
})
colorPicker.addEventListener("change", () => {
  selectedColor = colorPicker.value;
  colorPicker.style.backgroundColor = colorPicker.value
})
function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown)return
  e.target.style.backgroundColor = selectedColor
}