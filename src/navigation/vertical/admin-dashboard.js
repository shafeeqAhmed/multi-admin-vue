export default [{
  header: 'Apps & Pages',
},
{
  title: 'Users Management',
  icon: 'UserIcon',
  children: [
    {
      title: 'Seller',
      route: { name: 'admin-seller' },
    },
    {
      title: 'Customer',
      route: { name: 'admin-customer' },
    },
    {
      title: 'Seller Request',
      route: 'admin-seller-requests',
    },
  ],
},
{
  title: 'Product',
  icon: 'ShoppingBagIcon',
  children: [
    {
      title: 'Products',
      route: 'admin-products-list',
    },
    {
      title: 'Add Product',
      route: 'admin-add-product',
    },
    {
      title: 'Seller Product',
      route: 'admin-seller-product',
    },
    {
      title: 'Customer Orders',
      route: 'admin-customer-order',
    },
    {
      title: 'Category',
      route: 'admin-category-list',
    },
    {
      title: 'Sub Category',
      route: 'admin-sub-category-list',
    },
    {
      title: 'Product Request',
      route: 'admin-vendor-product-list',
    },

  ],
},
{
  title: 'Marketing',
  icon: 'BellIcon',
  children: [
    {
      title: 'Flash Deals',
      route: 'admin-flashdeals-list',
    },
    {
      title: 'NewsLetters',
      route: 'newsletters-email',
    },
    {
      title: 'Subscribers',
      route: 'subscribers-list',
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
  title: 'Setup & Configurations',
  icon: 'ShoppingBagIcon',
  children: [
    {
      title: 'Volumetric Weight',
      route: 'volumetric-weight',
    },
    {
      title: 'SMTP',
      route: 'smtp-details',
    },
    {
      title: 'Social Media Logins',
      route: 'admin-social-media-login',
    },
    {
      title: 'Google Recaptcha',
      route: 'admin-google-recaptcha',
    },
    {
      title: 'General Setting',
      route: 'admin-general-setting',
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
