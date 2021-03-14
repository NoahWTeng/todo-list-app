const slides = [
  {
    id: 1,
    title: 'Esse incididunt laboris',
    description: 'Exercitation voluptate fugiat ex velit consectetur eu. Fugiat ex velit consectetur eu.',
    img: require('../../../public/static/img/03.png'),

  },
  {
    id: 2,
    title: 'Nulla adipisicing ipsum',
    description: 'Exercitation voluptate fugiat ex velit consectetur eu. Fugiat ex velit consectetur eu.',
    img: require('../../../public/static/img/05.png'),

  },
  {
    id: 3,
    title: 'Non qui magna nulla',
    description: 'Exercitation voluptate fugiat ex velit consectetur eu. Fugiat ex velit consectetur eu.',
    img: require('../../../public/static/img/06.png'),

  },
]

export default (req, res) => {
  res.status(200).json(slides)
}
