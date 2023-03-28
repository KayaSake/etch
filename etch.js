const container = document.querySelector("#container")

const content = document.getElementById('div');
content.classList.add('content')
container.appendChild(content)

const grid = content.createElement('div')
grid.classList.add('grid')
container.appendChild(grid);
