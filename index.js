console.log('hola')

// const getDataCurrency = () => {
//   let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json'
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

const getDataCurrency = async () => {
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json`
  const response = await fetch(url)
  console.log('response', response)
  const data = await response.json()
  console.log('data', data)
}

getDataCurrency()