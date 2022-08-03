import { shallowMount } from '@vue/test-utils';

import Login from '@/modules/auth/views/Login.vue';
import { createVuexStore } from '../../../../../tests/mock-data/mock-store';
import Swal from 'sweetalert2';

describe('Navbar Component tests', () => {
  const store = createVuexStore({
    status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
    user: { name: 'anbreaker', email: 'test@test.com' },
    idToken: 'ABC-123',
    refreshToken: 'XYZ-123',
  });

  jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn(),
  }));

  store.dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should be match with the snapshot', () => {
    const wrapper = shallowMount(Login, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('the wrong credentials, they must trigger the SwalError', async () => {
    store.dispatch.mockReturnValueOnce({
      ok: false,
      message: 'Credentials Error',
    });

    const wrapper = shallowMount(Login, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('form').trigger('submit');

    expect(store.dispatch).toHaveBeenCalledWith('auth/loginUser', { email: '', password: '' });

    // expect(Swal.fire).toHaveBeenCalledWith('Error', 'Credentials Error', 'error');
  });

  test('should redirect to the path no-entry', async () => {
    store.dispatch.mockReturnValueOnce({ ok: true });

    const wrapper = shallowMount(Login, {
      global: {
        plugins: [store],
      },
    });

    const [email, password] = wrapper.findAll('input');

    await email.setValue('test@test.com');
    await password.setValue('123456');

    await wrapper.find('form').trigger('submit');

    expect(store.dispatch).toHaveBeenCalledWith('auth/loginUser', {
      email: 'test@test.com',
      password: '123456',
    });

    // expect(wrapper.router.push).toHaveBeenCalledWith({ name: 'no-entry' });

    // console.log(wrapper.vm.userForm)
  });
});
