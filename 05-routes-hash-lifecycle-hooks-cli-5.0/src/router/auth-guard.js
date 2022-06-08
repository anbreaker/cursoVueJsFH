export const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log(random, 'Authentication - isAuthenticatedGuard', random);
      next();
    } else {
      console.log(random, 'Authentication Failed - isAuthenticatedGuard', random);
      next({ name: 'pokemon-home' });
    }
  });
};
