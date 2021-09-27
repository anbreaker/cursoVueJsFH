import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const firebaseUrl = process.env.VUE_APP_FIREBASE_URL

const journalApi = axios.create({
  baseURL: firebaseUrl,
})

export default journalApi
