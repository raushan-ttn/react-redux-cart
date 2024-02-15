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
      active: true,
      scroll: false,
      children: authStatus
        ? [
            {
              name: 'Our Products',
              slug: '/products',
              scroll: false,
              active: authStatus,
            },
            {
              name: 'Add Product',
              slug: '/add-product',
              scroll: false,
              active: authStatus,
            },
            {
              name: 'Add Services',
              slug: '/add-service',
              scroll: false,
              active: authStatus,
            },
          ]
        : [],
    },
  ];

  return navItems;
};

export default useHeaderLink;
