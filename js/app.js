window.onload = function() {
  const slider = document.getElementById('myRange')
  console.log(slider.value)
  const sliderHeader = document.getElementById('pixelSlider')
  const container = document.getElementById('container')
  const squares = document.querySelectorAll('.square')
  const root = document.documentElement;  

  slider.addEventListener('input', (e) => {
    let value = e.target.value
    let squares = parseInt(value*value)
    sliderHeader.innerText = `Pixel size (${value} x ${value})`
    root.style.setProperty("--heightAndWidth", value);
    updateSquares(squares)
  })

  const updateSquares = (squares) => {
    const boxes = document.querySelectorAll('.square')
    boxes.forEach(box => {
      box.remove();
    });

    for (let i = 1; i <= squares; i++) {
      console.log(i, 'squares:', squares)
      const content = document.createElement('div')
      content.classList.add('square')
      container.appendChild(content)
    } 
  }

  container.addEventListener('mouseover', (e) => {
    console.log(e)
    if (e.target.className === 'square') {
      e.target.style.background = 'black'
    }
  })


  // squares.forEach(square => {
  //   square.addEventListener('mouseover', (e) => {
  //     e.target.style.background = 'black'
  //     console.log('square clicked')
  //   })
  // })
}