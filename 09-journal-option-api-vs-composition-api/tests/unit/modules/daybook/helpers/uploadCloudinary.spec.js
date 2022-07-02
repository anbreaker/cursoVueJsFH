import axios from 'axios';
import 'setimmediate';
import cloudinary from 'cloudinary';

import { uploadImageCloudinary } from '@/modules/daybook/helpers/uploadCloudinary';

cloudinary.config({
  cloud_name: process.env.VUE_APP_CLOUDINARY_NAME,
  api_key: process.env.VUE_APP_CLOUDINARY_KEY,
  api_secret: process.env.VUE_APP_CLOUDINARY_SECRET,
});

describe('uploadImageCloudinary testing', () => {
  test('must load a file and return a url', async (done) => {
    const { data } = await axios.get(
      'https://res.cloudinary.com/dlayuetwi/image/upload/v1655396629/curso-vue-fh/e98rl5rxlozqaxggbgjv.png',
      { responseType: 'arraybuffer' }
    );

    const file = new File([data], 'foto.jpg');

    const url = await uploadImageCloudinary(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });
});
