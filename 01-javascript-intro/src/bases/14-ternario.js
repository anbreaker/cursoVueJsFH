let firstName
let lastName = "anbreaker"

console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName' }`)

const isActive = true

const message = isActive ? "Activo" : "Inactivo"

// if ( isActive ) {
//     message = 'Activo'
// } else {
//     message = 'Inactivo'
// }

console.log(message)
