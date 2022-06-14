import axios from 'axios';

export const uploadImageCloudinary = async (file) => {
  try {
    if (!file) return;

    const formData = new FormData();

    formData.append('upload_preset', process.env.VUE_APP_UPLOAD_PRESET);
    formData.append('file', file);

    const url = process.env.VUE_APP_API_KEY_URL;

    const { data } = await axios.post(url, formData);

    return data.secure_url;
  } catch (error) {
    console.log('Error to upload image', error);

    return null;
  }
};
