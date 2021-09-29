import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const uploadImage = async (file) => {
  if (!file) return

  try {
    const formData = new FormData()

    formData.append("upload_preset", process.env.VUE_APP_UPLOAD_PRESET)
    formData.append("file", file)

    const url = process.env.VUE_APP_API_KEY_URL

    const response = await axios.post(url, formData)

    return response.data.secure_url
  } catch (error) {
    console.error("Error to load image, show logs")
    console.log(error)
    return null
  }
}

export default uploadImage
