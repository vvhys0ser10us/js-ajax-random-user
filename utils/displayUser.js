import get from './getElement.js'

const img = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btns = [...document.querySelectorAll('.icon')]

const displayUser = (user) => {
  img.src = user.picture
  value.textContent = user.name
  removeActive()
  btns[0].classList.add('active')
  btns.forEach((button) => {
    const label = button.dataset.label
    button.addEventListener('click', (e) => {
      title.textContent = `My ${label} is`
      value.textContent = user[label]
      removeActive()
      e.currentTarget.classList.add('active')
    })
  })
}

function removeActive() {
  btns.forEach((btn) => {
    btn.classList.remove('active')
  })
}

export default displayUser
