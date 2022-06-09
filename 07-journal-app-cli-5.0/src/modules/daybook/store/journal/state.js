export default () => ({
  islocal: true,
  entries: [
    {
      id: new Date().getTime(), // unique id for each entry
      date: new Date().toDateString(), //sat 23 jun
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tempora!',
      picture: null, // 'https://picsum.photos/200/300',
    },
    {
      id: new Date().getTime() + 100, // unique id for each entry
      date: new Date().toDateString(), //sat 23 jun
      text: 'Consectetur adipisicing elit. Non, tempora! Lorem ipsum dolor sit amet',
      picture: null, // 'https://picsum.photos/200/300',
    },
    {
      id: new Date().getTime() + 200, // unique id for each entry
      date: new Date().toDateString(), //sat 23 jun
      text: ' Non, tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      picture: null, // 'https://picsum.photos/200/300',
    },
  ],
});
