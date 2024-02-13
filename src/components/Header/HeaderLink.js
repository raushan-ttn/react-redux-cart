import { authService } from '../../services';

const useHeaderLink = () => {
  const authStatus = authService.getAuthStatus();
  const navItems = [
    {
      name: 'Home',
      slug: '#section_1',
      active: true,
      scroll: true,
      children: [],
    },
    {
      name: 'Browse Topics',
      slug: '#section_2',
      active: true,
      scroll: true,
      children: [],
    },
    {
      name: 'How it works',
      slug: '#section_3',
      active: true,
      scroll: true,
      children: [],
    },
    {
      name: 'Faqs',
      slug: '#section_4',
      active: true,
      scroll: true,
      children: [],
    },
    {
      name: 'Contact',
      slug: '#section_5',
      scroll: true,
      active: true,
      children: [],
    },
    {
      name: 'About Us',
      slug: '/about',
      active: authStatus,
      scroll: false,
      children: [
        {
          name: 'About Us',
          slug: '/about',
          active: authStatus,
          scroll: false,
        },
        {
          name: 'Clients',
          slug: '/about-client',
          scroll: false,
          active: authStatus,
        },
        {
          name: 'Services',
          slug: '/about-service',
          scroll: false,
          active: authStatus,
        },
      ],
    },
  ];

  return navItems;
};

export default useHeaderLink;
