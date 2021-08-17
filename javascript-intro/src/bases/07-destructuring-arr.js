

const characters = ['Goku','Vegeta','Trunks', 'Goten']
const characters2 = ['Goku','Vegeta','Trunks']

const [ g, v, t, goten = 'No tiene valor' ] = characters

const [ , , , goten2 = 'No tiene valor' ] = characters2

console.log(goten2)

const returnArray = ([ letters, numbers ]) => {
  return [ letters , numbers ]
}

const [ letters, numbers ] = returnArray(['XYZ',987])

console.log( letters, numbers )


