export default [
  {
    header: 'Apps & Pages',
  },
  {
    title: 'Product',
    icon: 'ShoppingBagIcon',
    children: [
      {
        title: 'Add Product',
        route: 'admin-add-product',
      },
      {
        title: 'Seller Product',
        route: 'admin-seller-product',
      },
      {
        title: 'Category',
        route: 'admin-category-list',
      },
      {
        title: 'Sub Category',
        route: 'admin-sub-category-list',
      },
    ],
  },
  {
    title: 'Website Setup',
    icon: 'ShoppingBagIcon',
    children: [
      {
        title: 'Settings',
        route: 'admin-website-settings',
      },
      {
        title: 'Header',
        route: 'admin-website-settings-header',
      },
      {
        title: 'Footer',
        route: 'admin-website-settings-footer',
      },
      {
        title: 'Pages',
        route: 'admin-website-settings-pages',
      },
    ],
  },
  {
    title: 'Custom Fields',
    route: 'admin-custom-field-list',
    icon: 'FileTextIcon',
  },
  {
    title: 'Attributes',
    route: 'admin-attributes-list',
    icon: 'FileTextIcon',
  },
  {
    title: 'Blogs',
    icon: 'ShoppingBagIcon',
    children: [
      {
        title: 'All Blogs',
        route: 'admin-blogs-list',
      },
      {
        title: 'Categories',
        route: 'admin-blogs-categories-list',
      },
    ],
  },
  {
    title: 'Documentation',
    href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
    icon: 'FileTextIcon',
  },
]
