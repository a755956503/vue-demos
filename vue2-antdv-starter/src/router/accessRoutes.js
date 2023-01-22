const permissionRoutes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        // component: () => import('@/views/home/indexEmpty')
        component: () => import('@/views/home')
        // component: require('@/views/home/indexEmpty').default
      },
      {
        path: '/task',
        name: 'task',
        component: () => import('@/views/task')
      }
    ]
  }
];
const defaultRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  }
];
export {
  permissionRoutes,
  defaultRoutes
}