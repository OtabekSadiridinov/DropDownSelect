const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Facebook', component: () => import('pages/Facebook.vue') },
      { path: 'Github', component: () => import('pages/Github.vue') },
      { path: 'Nintendo', component: () => import('pages/Nintendo.vue') },
      { path: 'Page2', component: () => import('pages/Page2.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
