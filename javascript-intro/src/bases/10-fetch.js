const apiKey = "YQnG8xqCyq2shbGATEpCX95u0Kb5biNc"
const link = "https://api.giphy.com/v1/gifs/random?api_key"

// With Promises
fetch(`${link}=${apiKey}`)
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original

    const img = document.createElement("img")
    img.src = url

    document.body.append(img)
  })

// With async await
const fetchGiphy = async () => {
  try {
    let response = await fetch(`${link}=${apiKey}`)
    response = await response.json()

    const { data } = response
    const { url } = data.images.original

    const img = document.createElement("img")
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.log("Error en la petición", error)
    throw error
  }
}

fetchGiphy()
