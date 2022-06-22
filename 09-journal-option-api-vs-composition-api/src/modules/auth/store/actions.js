import { authApi } from '@/api/authApi';

export const createUser = async ({ commit }, user) => {
  try {
    const { name, email, password } = user;

    const { data } = await authApi.post(':signUp', {
      email,
      password,
      returnSecureToken: true,
    });

    const { idToken, refreshToken } = data;

    await authApi.post(':update', { displayName: name, idToken });

    // Mutation loginUser
    delete user.password;
    commit('loginUser', { user, idToken, refreshToken });

    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

export const loginUser = async ({ commit }, user) => {
  try {
    const { email, password } = user;

    const { data } = await authApi.post(':signInWithPassword', {
      email,
      password,
      returnSecureToken: true,
    });

    const { displayName, idToken, refreshToken } = data;

    console.log({ data });
    user.name = displayName;

    // Mutation loginUser
    commit('loginUser', { user, idToken, refreshToken });

    return { ok: true };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

export const checkAuthentication = async ({ commit }) => {
  try {
    const idToken = localStorage.getItem('idToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!idToken) {
      commit('logout');

      return { ok: false, message: 'No token found' };
    }

    const { data } = await authApi.post(':lookup', { idToken });

    const { displayName, email } = data.users[0];

    // console.log(displayName, email);

    const user = {
      name: displayName,
      email,
    };

    // Mutation loginUser
    commit('loginUser', { user, idToken, refreshToken });

    return { ok: true };
  } catch (error) {
    commit('logout');

    return { ok: false, message: error.response.data.error.message };
  }
};
