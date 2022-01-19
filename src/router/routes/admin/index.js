/* eslint-disable eol-last */
/* eslint-disable func-call-spacing */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
export default [
    // *===============================================---*
    // *--------- CATEGORY  ---------------------------------------*
    // *===============================================---*
    {
        path: '/admin/category',
        name: 'admin-category-list',
        component: () =>
            import ('@/views/admin/categories/categories-list/CategoryList.vue'),
        meta: {
            pageTitle: 'Category',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Category',
                },
                {
                    text: 'Index',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/sub-category',
        name: 'admin-sub-category-list',
        component: () =>
            import ('@/views/admin/categories/categories-list/SubCategoryList.vue'),
        meta: {
            pageTitle: 'Sub Category',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Sub Category',
                },
                {
                    text: 'Index',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/vendor-products',
        name: 'admin-vendor-product-list',
        component: () =>
            import ('@/views/admin/vendorProducts/list/index.vue'),
        meta: {
            pageTitle: 'Vendor Product List',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Vendor Products',
                },
                {
                    text: 'Index',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/add-sub-category/:slug',
        name: 'admin-add-sub-category',
        component: () =>
            import ('@/views/admin/categories/categories-list/AddSubCategory.vue'),
        meta: {
            pageTitle: 'Sub Category',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Sub Category',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/edit-sub-category/:slug',
        name: 'admin-edit-sub-category',
        component: () =>
            import ('@/views/admin/categories/categories-list/AddSubCategory.vue'),
        meta: {
            pageTitle: 'Sub Category',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Sub Category',
                },
                {
                    text: 'Edit',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/users/seller',
        name: 'admin-seller',
        component: () =>
            import ('@/views/admin/users/list/seller.vue'),
        meta: {
            pageTitle: 'Seller',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Seller',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/users/customer',
        name: 'admin-customer',
        component: () =>
            import ('@/views/admin/users/list/customer.vue'),
        meta: {
            pageTitle: 'Customer',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Customer',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/add-product',
        name: 'admin-add-product',
        component: () =>
            import ('@/views/admin/products/form/Form.vue'),
        meta: {
            pageTitle: 'Add Product',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Add Product',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    {
      path: '/admin/add-product/:id',
      name: 'admin-edit-product',
      component: () =>
          import ('@/views/admin/products/form/Form.vue'),
      meta: {
          pageTitle: 'Update Product',
          // contentClass: 'ecommerce-application',
          breadcrumb: [{
                  text: 'Update Product',
              },
              {
                  text: 'Update',
                  active: true,
              },
          ],
      },
  },
    {
        path: '/admin/seller-product',
        name: 'admin-seller-product',
        component: () =>
            import ('@/views/admin/products/list/seller/SellerProduct.vue'),
        meta: {
            pageTitle: 'Seller Product',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'seller Product',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/category/excel',
        name: 'admin-category-excel',
        component: () =>
            import ('@/views/admin/categories/categories-list/exportCategoriesToExcel.vue'),
    },
    {
        path: '/admin/custom-fields-list',
        name: 'admin-custom-field-list',
        component: () =>
            import ('@/views/admin/customFields/list/Fields.vue'),
        meta: {
            pageTitle: 'Custom Fields',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Custom Fields',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/add-custom-fields',
        name: 'admin-add-custom-field',
        component: () =>
            import ('@/views/admin/customFields/form/add.vue'),
        meta: {
            pageTitle: 'Add Custom Fields',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Add Custom Fields',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/assign-custom-fields-to-category/:id',
        name: 'admin-assign-custom-field-to-category',
        component: () =>
            import ('@/views/admin/customFields/list/assignFieldToCategory.vue'),
        meta: {
            pageTitle: 'Add Custom Fields',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Add Custom Fields',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/allocated-custom-fields-to-category/:id',
        name: 'admin-allocated-custom-field-to-category',
        component: () =>
            import ('@/views/admin/customFields/list/allocatedFieldsToCategory.vue'),
        meta: {
            pageTitle: 'Add Custom Fields',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Add Custom Fields',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    // seller request
    {
        path: '/admin/seller-requests',
        name: 'admin-seller-requests',
        component: () =>
        import ('@/views/admin/sellerRequests/list/requests.vue'),
        meta: {
            pageTitle: 'Seller Requests',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Seller Requests',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },

    {
        path: '/admin/view-seller-request/:id',
        name: 'admin-view-seller-request',
        component: () =>
            import ('@/views/admin/sellerRequests/form/detail.vue'),
        meta: {
            pageTitle: 'Seller Request Detail',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Request Detail',
                },
                {
                    text: 'Detail',
                    active: true,
                },
            ],
        },
    },
   {
        path: '/admin/view-seller-detail/:id',
        name: 'admin-view-seller-detail',
        component: () =>
            import ('@/views/admin/users/list/detail.vue'),
        meta: {
            pageTitle: 'Seller Detail',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Seller Detail',
                },
                {
                    text: 'Detail',
                    active: true,
                },
            ],
        },
    },
     // products
     {
        path: '/admin/products',
        name: 'admin-products-list',
        component: () =>
        import ('@/views/admin/products/list/List.vue'),
        meta: {
            pageTitle: 'Products List',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Products List',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    // attributes
    {
        path: '/admin/attributes-list',
        name: 'admin-attributes-list',
        component: () =>
            import ('@/views/admin/attributes/list/Attributes.vue'),
        meta: {
            pageTitle: 'Attributes List',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Attributes List',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/add-attribute',
        name: 'admin-add-attribute',
        component: () =>
            import ('@/views/admin/attributes/form/add.vue'),
        meta: {
            pageTitle: 'Add Attribute',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Add Attribute',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/add-attribute/:id',
        name: 'admin-edit-attribute',
        component: () =>
            import ('@/views/admin/attributes/form/add.vue'),
        meta: {
            pageTitle: 'Add Attribute',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Add Attribute',
                },
                {
                    text: 'Add',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/assign-attribute-to-category/:id',
        name: 'admin-assign-attribute-to-category',
        component: () =>
            import ('@/views/admin/attributes/list/assignAttributeToCategory.vue'),
        meta: {
            pageTitle: 'Assign Attribute ',
            // contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Assign Category Attribute',
                },
                {
                    text: 'Assign',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/allocated-attributes-to-category/:id',
        name: 'admin-allocated-attributes-to-category',
        component: () =>
            import ('@/views/admin/attributes/list/allocatedAttributesToCategory.vue'),
        meta: {
            pageTitle: 'Allocated Attributes',
            breadcrumb: [{
                    text: 'Allocated Attributes',
                },
                {
                    text: 'List',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/website-settings',
        name: 'admin-website-settings',
        component: () =>
            import ('@/views/admin/websiteSettings/Settings.vue'),
        meta: {
            pageTitle: 'Website Settings',
            breadcrumb: [{
                    text: 'Website',
                },
                {
                    text: 'Settings',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/website-settings-header',
        name: 'admin-website-settings-header',
        component: () =>
            import ('@/views/admin/websiteSettings/Header.vue'),
        meta: {
            pageTitle: 'Website Header',
            breadcrumb: [{
                    text: 'Website Settings',
                },
                {
                    text: 'Header',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/admin/website-settings-footer',
        name: 'admin-website-settings-footer',
        component: () =>
            import ('@/views/admin/websiteSettings/Footer.vue'),
        meta: {
            pageTitle: 'Website Footer',
            breadcrumb: [{
                    text: 'Website Settings',
                },
                {
                    text: 'Footer',
                    active: true,
                },
            ],
        },
    },

    /// ////////////////////// Dummy Routes /////////////////////////

    {
        path: '/admin/admin-Tabsform',
        name: 'admin-Tabsform',
        component: () =>
            import ('@/views/admin/dummy/Tabsform/TabsForm.vue'),
        meta: {
            pageTitle: 'TabsForm',
        },
    },
    {
        path: '/admin/product-table-item',
        name: 'product-table-item',
        component: () =>
            import ('@/views/admin/ProductTableItem.vue'),
        meta: {
            pageTitle: 'Product Table',

        },
    },
    {
        path: '/admin/product-table-item',
        name: 'product-table-item',
        component: () =>
            import ('@/views/admin/ProductTableItem.vue'),
        meta: {
            pageTitle: 'Product Table',

        },
    },
    {
        path: '/admin/Images',
        name: 'Images',
        component: () =>
            import ('@/views/admin/Images.vue'),
        meta: {
            pageTitle: 'Website Settings',
            breadcrumb: [{
                    text: 'Website',
                },
                {
                    text: 'Settings',
                    active: true,
                },
            ],
        },
    },
  {
    path: '/admin/website-settings-pages',
    name: 'admin-website-settings-pages',
    component: () => import('@/views/admin/websiteSettings/pages/list/Pages.vue'),
    meta: {
      pageTitle: 'Website Pages',
      breadcrumb: [
        {
          text: 'Website Pages',
        },
        {
          text: 'Pages',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/add-pages/:id',
    name: 'admin-edit-pages',
    component: () => import('@/views/admin/websiteSettings/pages/form/Add.vue'),
    meta: {
      pageTitle: 'Add Pages',
      breadcrumb: [
        {
          text: 'Add Pages',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/add-pages',
    name: 'admin-add-pages',
    component: () => import('@/views/admin/websiteSettings/pages/form/Add.vue'),
    meta: {
      pageTitle: 'Add Pages',
      breadcrumb: [
        {
          text: 'Add Pages',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/blogs-add',
    name: 'admin-blogs-add',
    component: () => import('@/views/admin/blogs/form/add.vue'),
    meta: {
      pageTitle: 'Add Blog',
      breadcrumb: [
        {
          text: 'Add Blog',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/blogs-add/:id',
    name: 'admin-blogs-edit',
    component: () => import('@/views/admin/blogs/form/add.vue'),
    meta: {
      pageTitle: 'Add Blog',
      breadcrumb: [
        {
          text: 'Add Blog',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/blogs-list',
    name: 'admin-blogs-list',
    component: () => import('@/views/admin/blogs/list/blogsList.vue'),
    meta: {
      pageTitle: 'Blogs',
      breadcrumb: [
        {
          text: 'All',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/blogs-categories-add',
    name: 'admin-blogs-categories-add',
    component: () => import('@/views/admin/blogs/blogCategories/form/add.vue'),
    meta: {
      pageTitle: 'Categories',
      breadcrumb: [
        {
          text: 'Categories Add',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/blogs-categories-add/:id',
    name: 'admin-blogs-categories-edit',
    component: () => import('@/views/admin/blogs/blogCategories/form/add.vue'),
    meta: {
      pageTitle: 'Categories',
      breadcrumb: [
        {
          text: 'Categories Add',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/blogs-categories-list',
    name: 'admin-blogs-categories-list',
    component: () => import('@/views/admin/blogs/blogCategories/list/list.vue'),
    meta: {
      pageTitle: 'Categories',
      breadcrumb: [
        {
          text: 'All',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
},
{

    path: '/admin/customer-order',
    name: 'admin-customer-order',
    component: () => import('@/views/admin/orders/list/List.vue'),
    meta: {
      pageTitle: 'Categories',
      breadcrumb: [
        {
          text: 'All',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
},
    {
        path: '/admin/order-detail/:order_no',
        name: 'admin-order-detail',
        component: () => import('@/views/admin/orders/detail/OrderDetail.vue'),

        meta: {
            pageTitle: 'Order',
            contentClass: 'ecommerce-application',
            breadcrumb: [{
                    text: 'Order',
                },
                {
                    text: 'Detail',
                    active: true,
                },
            ],
        },
    },
    {
      path: '/admin/subscribers-list',
      name: 'subscribers-list',
      component: () => import('@/views/admin/marketing/subscribers/list.vue'),
      meta: {
        pageTitle: 'Subscribers',
        breadcrumb: [
          {
            text: 'All',
          },
          {
            text: 'List',
            active: true,
          },
        ],
      },
  },
  {
      path: '/admin/newsletters-email',
      name: 'newsletters-email',
      component: () => import('@/views/admin/marketing/newsletters/newsletters.vue'),
      meta: {
        pageTitle: 'Newsletters',
        breadcrumb: [
          {
            text: 'Email',
          },
          {
            text: 'Send',
            active: true,
          },
        ],
      },
  },
  {
      path: '/admin/volumetric-weight',
      name: 'volumetric-weight',
      component: () => import('@/views/admin/setupConfigurations/shipping/volumetric/list/list.vue'),
      meta: {
        pageTitle: 'Volumetric Weight',
        breadcrumb: [
          {
            text: 'All',
          },
          {
            text: 'List',
            active: true,
          },
        ],
      },
  },
  {
      path: '/admin/smtp-details',
      name: 'smtp-details',
      component: () => import('@/views/admin/setupConfigurations/smtp/smtpAdd.vue'),
      meta: {
        pageTitle: 'SMTP',
        breadcrumb: [
          {
            text: 'Details',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
  },
  {
      path: '/admin/social-media-login',
      name: 'admin-social-media-login',
      component: () => import('@/views/admin/setupConfigurations/social-media-login/add.vue'),
      meta: {
        pageTitle: 'Social Media Login',
        breadcrumb: [
          {
            text: 'Details',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
  },
  {
      path: '/admin/google-recaptcha',
      name: 'admin-google-recaptcha',
      component: () => import('@/views/admin/setupConfigurations/google-recaptcha/add.vue'),
      meta: {
        pageTitle: 'Social Media Login',
        breadcrumb: [
          {
            text: 'Details',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
  },
  {
      path: '/admin/general-setting',
      name: 'admin-general-setting',
      component: () => import('@/views/admin/setupConfigurations/general-setting/add.vue'),
      meta: {
        pageTitle: 'General Setting',
        breadcrumb: [
          {
            text: 'Setting',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
  },
  {
    path: '/admin/volumetric-edit/:id',
    name: 'volumetric-edit',
    component: () => import('@/views/admin/setupConfigurations/shipping/volumetric/form/add.vue'),
    meta: {
      pageTitle: 'Update',
      breadcrumb: [
        {
          text: 'Volumetric',
        },
        {
          text: 'Edit',
          active: true,
        },
      ],
    },
  },
  /// flashdeal
  {

    path: '/admin/flashdeals/list',
    name: 'admin-flashdeals-list',
    component: () => import('@/views/admin/flashdeals/list/List.vue'),
    meta: {
      pageTitle: 'Flashdeals',
      breadcrumb: [
        {
          text: 'All',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
},
{

    path: '/admin/flashdeals/add',
    name: 'admin-flashdeals-add',
    component: () => import('@/views/admin/flashdeals/form/add.vue'),
    meta: {
      pageTitle: 'Flashdeals',
      breadcrumb: [
        {
          text: 'Flashdeal Add ',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
},
{

    path: '/admin/flashdeals/edit/:id',
    name: 'admin-flashdeals-edit',
    component: () => import('@/views/admin/flashdeals/form/add.vue'),
    meta: {
      pageTitle: 'Flashdeals',
      breadcrumb: [
        {
          text: 'Flashdeal edit ',
        },
        {
          text: 'Edit',
          active: true,
        },
      ],
    },
},

]
