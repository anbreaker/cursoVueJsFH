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
});
