export const getRandomInt = () => {
  return new Promise((resolve) => {
    const randomInt = Math.floor(Math.random() * 10 + 1)

    setTimeout(() => {
      resolve(randomInt)
    }, 1500)
  })
}
