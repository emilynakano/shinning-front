import api from '../services/api';

export async function signIn(user) {
  const promise = await api.post('sign-in', user);

  const { accessToken, username } = promise.data;

  localStorage.setItem('@shining:token', accessToken);
  localStorage.setItem('@shining:username', username);
}

export async function signUpAndLogin(user) {
  await api.post('sign-up', user);

  const userLogin = {
    email: user.email,
    password: user.password,
  };

  await signIn(userLogin);
}
