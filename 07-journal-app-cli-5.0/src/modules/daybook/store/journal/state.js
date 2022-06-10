export default () => ({
  islocal: true,
  entries: [
    {
      id: new Date().getTime(), // unique id for each entry
      date: new Date().toDateString(), //sat 23 jun
      text: 'Rodrigor tiene musho peligro diodeno apetecan. Llevame al sircoo hasta luego Lucas jarl qué dise usteer caballo blanco caballo negroorl.',
      picture: null, // 'https://picsum.photos/200/300',
    },
    {
      id: new Date().getTime() + 100, // unique id for each entry
      date: new Date().toDateString(), //sat 23 jun
      text: 'Diodeno llevame al sircoo apetecan a peich papaar papaar no te digo trigo por no llamarte Rodrigor por la gloria de mi madre.',
      picture: null, // 'https://picsum.photos/200/300',
    },
    {
      id: new Date().getTime() + 200, // unique id for each entry
      date: new Date().toDateString(), //sat 23 jun
      text: 'Ahorarr se calle ustée al ataquerl a wan diodeno de la pradera qué dise usteer ahorarr torpedo amatomaa diodeno.',
      picture: null, // 'https://picsum.photos/200/300',
    },
  ],
});
