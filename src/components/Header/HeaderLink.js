const navItems = [
  {
    name: "Home",
    slug: "#section_1",
    active: true,
    scroll: true,
    children: [],
  },
  {
    name: "Browse Topics",
    slug: "#section_2",
    active: true,
    scroll: true,
    children: [],
  },
  {
    name: "How it works",
    slug: "#section_3",
    active: true,
    scroll: true,
    children: [],
  },
  {
    name: "Faqs",
    slug: "#section_4",
    active: true,
    scroll: true,
    children: [],
  },
  {
    name: "Contact",
    slug: "#section_5",
    scroll: true,
    active: true,
    children: [],
  },
  {
    name: "About Us",
    slug: "/about",
    active: true,
    scroll: false,
    children: [
      {
        name: "About Us",
        slug: "/about",
        active: true,
        scroll: false,
      },
      {
        name: "Clients",
        slug: "/about-client",
        scroll: false,
        active: true,
      },
      {
        name: "Services",
        slug: "/about-service",
        scroll: false,
        active: true,
      },
    ],
  },
];

export default navItems;
