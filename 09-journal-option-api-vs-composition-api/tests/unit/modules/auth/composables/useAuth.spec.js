import { useAuth } from '@/modules/auth/composables/useAuth';

const mockStore = {
  dispatch: jest.fn(),
  commit: jest.fn(),
  getters: {
    'auth/currentState': 'authenticated',
    'auth/username': 'anbreaker',
  },
};

jest.mock('vuex', () => ({
  useStore: () => mockStore,
}));

describe('testin useAuth Composoble', () => {
  beforeEach(() => jest.clearAllMocks());

  test('create successful user ', async () => {
    const { createUser } = useAuth();

    const newUser = { name: 'anbreaker', email: 'test@test.com' };

    mockStore.dispatch.mockReturnValue({ ok: true });

    const response = await createUser(newUser);

    expect(mockStore.dispatch).toHaveBeenCalledWith('auth/createUser', newUser);

    expect(response).toEqual({ ok: true });
  });

  test('create user failed, - email already exists', async () => {
    const { createUser } = useAuth();

    const newUser = { name: 'anbreaker', email: 'test@test.com' };

    mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL_EXISTS' });

    const response = await createUser(newUser);

    expect(mockStore.dispatch).toHaveBeenCalledWith('auth/createUser', newUser);

    expect(response).toEqual({ ok: false, message: 'EMAIL_EXISTS' });
  });

  test('loginUser successful', async () => {
    const { loginUser } = useAuth();

    const loginForm = { email: 'test@test.com', password: '123456' };

    mockStore.dispatch.mockReturnValue({ ok: true });

    const response = await loginUser(loginForm);

    expect(mockStore.dispatch).toHaveBeenCalledWith('auth/loginUser', loginForm);

    expect(response).toEqual({ ok: true });
  });

  test('loginUser invalid', async () => {
    const { loginUser } = useAuth();

    const loginForm = { email: 'test@test.com', password: '123456' };

    mockStore.dispatch.mockReturnValue({
      ok: false,
      message: 'EMAIL/PASSWORD do not exist',
    });

    const response = await loginUser(loginForm);

    expect(mockStore.dispatch).toHaveBeenCalledWith('auth/loginUser', loginForm);

    expect(response).toEqual({
      ok: false,
      message: 'EMAIL/PASSWORD do not exist',
    });
  });

  test('checkAuthentication successful', async () => {
    const { checkAuthentication } = useAuth();

    mockStore.dispatch.mockReturnValue({ ok: true });

    const response = await checkAuthentication();

    expect(mockStore.dispatch).toHaveBeenCalledWith('auth/checkAuthentication');

    expect(response).toEqual({ ok: true });
  });

  test('logout', async () => {
    const { logout } = useAuth();

    mockStore.commit.mockReturnValue();

    logout();

    expect(mockStore.commit).toHaveBeenCalledWith('auth/logout');
    expect(mockStore.commit).toHaveBeenCalledWith('journal/clearEntries');
  });

  test('getters: Computed! authStatus, username', async () => {
    const { authStatus, username } = useAuth();

    console.log(authStatus.value, username.value);
    // expect(authStatus.value).toBe('authenticated');
    // expect(username.value).toBe('anbreaker');
  });
});
