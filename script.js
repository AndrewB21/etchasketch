wrapper = document.querySelector(".wrapper");
grid = document.querySelector(".grid");
size = 0;

const createGrid = (gridSize) => {
  for (let i = 0; i <= size; i++){
      row = document.createElement('div');
      row.className="row";
      grid.appendChild(row);

      for(let j =0; j < gridSize; j++){
          item = document.createElement('div');
          item.className = 'rowDiv';
          item.style = `filter: brightness(99%); width: ${(960/gridSize)}px; height: ${(960/gridSize)}px;`
          row.appendChild(item);
      }
  }

  document.querySelectorAll('.rowDiv').forEach(item => {
    item.addEventListener('mouseover', event => {
      filterString = item.style.filter;
      const newFilter = parseInt(filterString.substring(11,13)) - 10;
      item.style = `filter: brightness(${newFilter}%); width: ${(960/gridSize)}; height: ${(960/gridSize)};`;
    })
  })

}

clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", event => {
  document.querySelectorAll('.rowDiv').forEach(item => {
    item.style = "filter: brightness(99%)";
  })
})

input = document.querySelector('#size')
input.addEventListener("input", function(){
  while(grid.firstChild){
    grid.removeChild(grid.firstChild)
  }
  size = this.value
  console.log(size);
  createGrid(size);
})