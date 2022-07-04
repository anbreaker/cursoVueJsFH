import axios from 'axios';

import { createVuexStore } from '../../../../../tests/mock-data/mock-store';

describe('Vuex, test AuthModule', () => {
  test('init State', () => {
    const store = createVuexStore({
      status: 'authenticating', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
      idToken: null,
      refreshToken: null,
    });

    const { status, user, idToken, refreshToken } = store.state.auth;

    expect(status).toBe('authenticating');
    expect(user).toBe(null);
    expect(idToken).toBe(null);
    expect(refreshToken).toBe(null);
  });

  // Mutations:
  test('Mutation: loginUser', () => {
    const store = createVuexStore({
      status: 'authenticating', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
      idToken: null,
      refreshToken: null,
    });

    const payload = {
      user: { name: 'anbreaker', email: 'test@test.com' },
      idToken: 'ABC-123',
      refreshToken: 'XYZ-123',
    };

    store.commit('auth/loginUser', payload);

    const { status, user, idToken, refreshToken } = store.state.auth;

    expect(status).toBe('authenticated');
    expect(user).toEqual({ name: 'anbreaker', email: 'test@test.com' });
    expect(idToken).toBe('ABC-123');
    expect(refreshToken).toBe('XYZ-123');
  });

  test('Mutation: logout', () => {
    const store = createVuexStore({
      status: 'authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: { name: 'anbreaker', email: 'test@test.com' },
      idToken: 'ABC-123',
      refreshToken: 'XYZ-123',
    });

    store.commit('auth/logout');

    const { status, user, idToken, refreshToken } = store.state.auth;

    expect(status).toBe('not-authenticated');
    expect(user).toBe(null);
    expect(idToken).toBeFalsy();
    expect(refreshToken).toBeFalsy();

    expect(localStorage.getItem('idToken')).toBeFalsy();
    expect(localStorage.getItem('refreshToken')).toBeFalsy();
  });

  // Getters
  test('getters: currentState, username', () => {
    const store = createVuexStore({
      status: 'authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: { name: 'anbreaker', email: 'test@test.com' },
      idToken: 'ABC-123',
      refreshToken: 'XYZ-123',
    });

    expect(store.getters['auth/currentState']).toBe('authenticated');
    expect(store.getters['auth/username']).toBe('anbreaker');
  });

  // Actions
  test('Actions: createUser - Error User Exists', async () => {
    const store = createVuexStore({
      status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
      idToken: null,
      refreshToken: null,
    });

    const newUser = { name: 'anbreaker', email: 'test@test.com', password: '123456' };

    const response = await store.dispatch('auth/createUser', newUser);

    expect(response).toEqual({ ok: false, message: 'EMAIL_EXISTS' });

    const { status, user, idToken, refreshToken } = store.state.auth;

    expect(status).toBe('not-authenticated');
    expect(user).toBe(null);
    expect(idToken).toBeFalsy();
    expect(refreshToken).toBeFalsy();
  });

  test('Actions: createUser - signUser - Create New User', async () => {
    const store = createVuexStore({
      status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
      idToken: null,
      refreshToken: null,
    });

    const newUser = { name: 'anbreaker', email: 'test1@test.com', password: '123456' };

    // SignIn
    await store.dispatch('auth/loginUser', newUser);

    const { idToken } = store.state.auth;

    // delete User for test
    const deleteResponse = axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${process.env.VUE_APP_FIREBASE_APIKEY}`,
      {
        idToken,
      }
    );

    // Create User
    const response = await store.dispatch('auth/createUser', newUser);

    expect(response).toEqual({ ok: true });

    const { status, idToken: token, refreshToken } = store.state.auth;

    expect(status).toBe('authenticated');
    expect(newUser).toEqual(newUser);
    expect(typeof token).toBe('string');
    expect(typeof refreshToken).toBe('string');
  });

  test('Actions: checkAuthentication - Valid', async () => {
    const store = createVuexStore({
      status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
      idToken: null,
      refreshToken: null,
    });

    // Login User
    const loginResponse = await store.dispatch('auth/loginUser', {
      email: 'test@test.com',
      password: '123456',
    });

    const { idToken } = store.state.auth;

    store.commit('auth/logout');

    localStorage.setItem('idToken', idToken);

    const checkResponse = await store.dispatch('auth/checkAuthentication');

    const { status, user, idToken: token, refreshToken } = store.state.auth;

    expect(checkResponse).toEqual({ ok: true });
    expect(status).toBe('authenticated');
    expect(user).toMatchObject({
      email: 'test@test.com',
      name: 'anbreaker',
    });
    expect(typeof token).toBe('string');
  });
  test('Actions: checkAuthentication - Authentication Negative', async () => {
    const store = createVuexStore({
      status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
      user: null,
      idToken: null,
      refreshToken: null,
    });

    localStorage.removeItem('idToken');
    const checkResponse = await store.dispatch('auth/checkAuthentication');

    expect(checkResponse).toEqual({ ok: false, message: 'No token found' });
    expect(store.state.auth.status).toBe('not-authenticated');

    localStorage.setItem('idToken', 'ABC-123');
    const checkResponseInvalid = await store.dispatch('auth/checkAuthentication');
    expect(checkResponseInvalid).toEqual({ ok: false, message: 'INVALID_ID_TOKEN' });
  });
});
