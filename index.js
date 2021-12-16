const randomBinary = () => Math.round(Math.random())

const template = document.querySelector('#template')
const container = document.querySelector('#container')
container.innerHTML = template.outerHTML.repeat(49)
template.remove()

const paths = [
  document.querySelector('.line').getAttribute('d'),
  'm144.4 26.52l33.97 73.73l39.63 83.75l-165-6l91.4-151.48z',
  'm144.4 26.52l-6.31 153.7l0.07 0.41l-0.16-0.01l6.4-154.11z'
]

document
  .querySelectorAll('.canvas')
  .forEach((canvas, i) => {
    canvas.removeAttribute('id')
    const shape = canvas.querySelector('.line')
    let activePath = 0
    setInterval(() => {
      if (++activePath > paths.length - 1) {
        activePath = 0
      }
      shape.setAttribute('d', paths[activePath])
      const fill = randomBinary()
      const stroke = +!fill
      shape.style.setProperty('--fill', fill)
      shape.style.setProperty('--stroke', stroke)
    }, 500 + (i + 1) * 3)
  })