import axios from 'axios';

export const journalApi = axios.create({
  baseURL: 'https://vue-journal-5d621-default-rtdb.europe-west1.firebasedatabase.app',
});
