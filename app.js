import get from './utils/getElement.js'
import getRandomUser from './utils/getRandomUser.js'
import displayUser from './utils/displayUser.js'

const btn = get('.btn')

const showUser = async () => {
  const user = await getRandomUser()
  displayUser(user)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
