//Create grid and make it drawable
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}

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

const defaultSize = 16;
let selectedSize = defaultSize
createGrid(defaultSize);


//Make size change function
const sizeBtns = document.querySelectorAll("#size-btn")
sizeBtns.forEach(sizeBtn => sizeBtn.addEventListener("click", () => {
  selectedSize = parseInt(sizeBtn.textContent)
  changeSize()
}))
function changeSize() {
  createGrid(selectedSize)
}


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
  colorPicker.style.backgroundColor = defaultColor
})
randomColorBtn.addEventListener("click", () => {
  selectedColor = getRandomColor()
  colorPicker.style.backgroundColor = selectedColor
})
colorPicker.addEventListener("change", () => {
  selectedColor = colorPicker.value;
  colorPicker.style.backgroundColor = colorPicker.value
})
function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown)return
  e.target.style.backgroundColor = selectedColor
}


// Create refresh button
const refreshBtn = document.getElementById("erase-btn")
refreshBtn.addEventListener("click", refresh)
function refresh(){
  const gridItems = document.querySelectorAll(".grid-item")
  gridItems.forEach(() => {
    gridItems.style.backgroundColor = "aliceblue"
  })
}