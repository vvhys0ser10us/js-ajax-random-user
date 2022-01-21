export default async () => {
  try {
    const URL = 'https://randomuser.me/api/'
    const res = await fetch(URL)
    const data = await res.json()
    const { name, email, dob, location, phone, login, picture } =
      data.results[0]

    return {
      name: `${name.first} ${name.last}`,
      email,
      age: dob.age,
      phone,
      picture: picture.large,
      street: `${location.street.number} ${location.street.name}`,
      password: login.password,
    }
  } catch (error) {
    console.log(error)
  }
}
