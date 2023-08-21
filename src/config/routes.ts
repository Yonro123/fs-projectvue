export default [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    name: 'UsersList',
    path: '/users',
    component: () => import('@/views/UsersPage.vue'),
    redirect: { name: 'UserPrev' },
    children: [
      {
        name: 'UserPrev',
        path: '',
        component: () => import('@/views/user/UsersPage.vue')
      },
      {
        name: 'UserAdd',
        path: 'add',
        component: () => import('@/views/user/AddPage.vue')
      },
      {
        name: 'UserPage',
        path: 'user/:userId',
        props: true,
        component: () => import('@/views/user/UserPage.vue')
      },
      {
        name: 'EditUserPage',
        path: 'edit/:userId',
        props: true,
        component: () => import('@/views/user/EditPage.vue')
      }
    ]
  },
  {
    name: 'LessonsList',
    path: '/lessons',
    redirect: { name: 'LessonsPrev' },
    component: () => import('@/views/LessonsPage.vue'),
    children: [
      {
        name: 'LessonsPrev',
        path: '',
        component: () => import('@/views/lesson/LessonsPage.vue')
      },
      {
        name: 'LessonsAdd',
        path: 'add',
        component: () => import('@/views/lesson/AddPage.vue')
      },
      {
        name: 'LessonPage',
        path: 'lesson/:lessonId',
        props: true,
        component: () => import('@/views/lesson/LessonPage.vue')
      }
    ]
  }
];
