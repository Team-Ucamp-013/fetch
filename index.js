console.log('hola')

// const getDataCurrency = () => {
//   let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json'
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// const getDataCurrency = async () => {
//   let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json`
//   const response = await fetch(url)
//   console.log('response', response)
//   const data = await response.json()
//   console.log('data', data)
// }

// getDataCurrency()


const getWeather = async () => {
  let ciudad = document.getElementById('ciudad').value
  console.log(ciudad)
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`
  const response = await fetch(url)
  console.log('response', response)
  const data = await response.json()
  const { main } = data
  console.log(`La temperatura en ${ciudad} es de ${main.temp}`)

}



