import axios from "axios"

const apiKey = "YQnG8xqCyq2shbGATEpCX95u0Kb5biNc"
// const link = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApiAxios = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
})

export default giphyApiAxios

// With Promises
giphyApiAxios.get("/random").then((response) => {
  const { data } = response.data
  const { url } = data.images.original

  const img = document.createElement("img")
  img.src = url

  document.body.append(img)
})

// With async await
const fetchGiphy = async () => {
  try {
    const { data } = (await giphyApiAxios("/random")).data
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
