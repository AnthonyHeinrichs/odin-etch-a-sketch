window.onload = function() {

  let psychadelic = false
  let whiteOut = false
  let grayScale = false

  const slider = document.getElementById('myRange')
  console.log(slider.value)
  const sliderHeader = document.getElementById('pixelSlider')
  const container = document.getElementById('container')
  const rainbow = document.getElementById('rainbow')
  const eraser = document.getElementById('eraser')
  const gray = document.getElementById('gray')
  const customColor = document.getElementById('customColor')
  const colorPicker = document.getElementById('colorPicker')
  const root = document.documentElement;  

  rainbow.addEventListener('click', () => {
    whiteOut= false
    grayScale = false
    removeStyles()
    psychadelic = true
  })

  eraser.addEventListener('click', () => {
    psychadelic = false
    grayScale = false
    whiteOut = true
  })

  gray.addEventListener('click', () => {
    psychadelic = false
    whiteOut= false
    removeStyles()
    grayScale = true
  })

  customColor.addEventListener('click', () => {
    whiteOut= false
    grayScale = false
    removeStyles()
    psychadelic = false
  })

  const removeStyles = () => {
    const boxes = document.querySelectorAll('.square')
    boxes.forEach(box => {
      box.removeAttribute('style')
    });
  }
  
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
      const content = document.createElement('div')
      content.classList.add('square')
      container.appendChild(content)
    } 
  }

  container.addEventListener('mouseover', (e) => {
    let color = colorPicker.value
    if (psychadelic) {
      color = `#${Math.floor(Math.random()*16777215).toString(16)}`
    } else if (whiteOut) {
      e.target.style.opacity = 1
      color = 'rgb(210, 210, 210)'
    } else if (grayScale) {
      color = 'black'
    }

    if ((e.target.className === 'square') && (grayScale)) {
      currentOpacity = Number(e.target.style.opacity)
      e.target.style.opacity = parseFloat(currentOpacity + 0.1)
      e.target.style.background = color
    } else if (e.target.className === 'square') {
      e.target.style.background = color
    }

  })
}