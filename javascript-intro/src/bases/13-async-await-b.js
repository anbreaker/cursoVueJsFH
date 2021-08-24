import axios from "axios"

const apiKey = "YQnG8xqCyq2shbGATEpCX95u0Kb5biNc"

const giphyApiAxios = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
})

const getImage = async () => {
  try {
    const { data } = (await giphyApiAxios.get("/random")).data
    const { url } = data.images.original

    const img = document.createElement("img")
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.log("Error en la petición", error)
    throw error
  }
}

getImage()
