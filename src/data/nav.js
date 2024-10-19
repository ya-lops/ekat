const nav = [
  {
    label: 'О компании',
    href: '/about',
    sublinks: [
      {label: 'Производство', href: '/about/production'},
      {label: 'Сертификаты', href: '/about/certificates'},
      {label: 'Технологии', href: '/about/technologies'},
      {label: 'Процесс работы', href: '/about/process'},
      {label: 'Отзывы', href: '/about/reviews'},
    ]
  },
  {
    label: 'Каталог',
    href: '/catalog',
    sublinks: [
      {label: 'Стаканы', href: '/catalog'},
      {label: 'Крышки', href: '/catalog/caps'},
      {label: 'Ложки', href: '/catalog'},
      {label: 'Контейнеры', href: '/catalog'},
      {label: 'Банки', href: '/catalog'},
      {label: 'Банки-тубы', href: '/catalog'},
      {label: 'Крышки-пломбы', href: '/catalog'},
      {label: 'Индивидуальные решения', href: '/catalog/individual'},
    ]
  },
  {
    label: 'Блог',
    href: '/blog',
    sublinks: [
      {label: 'Новости', href: '/blog/news'},
      {label: 'Статьи', href: '/blog/articles'},
      {label: 'Кейсы', href: '/blog/cases'},
    ]
  },
  {
    label: 'Контакты',
    href: '/contacts',
  }
];

export default nav;
