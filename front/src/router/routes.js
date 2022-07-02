import { checkIsLoggedIn, checkLandingPage } from './middleware'

const routes = [
  {
    path: "/landing",
    // beforeEnter: [checkLandingPage],
    component: () => import("layouts/LandingLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/website/LandingPage.vue") }
    ]
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    // beforeEnter: [checkLandingPage],
    props: true,
    children: [
      { path: "", name: "HomePage", component: () => import("src/pages/website/DynamicPage.vue") },
      { path: "p/:name", name: "DynamicPage", component: () => import("src/pages/website/DynamicPage.vue") },
      { path: "p/:name/:title", component: () => import("src/pages/website/DynamicPage.vue") },
      { path: "article", component: () => import("src/pages/articles/ArticlePage.vue") },
      { path: "article/:title/:index", component: () => import("src/pages/articles/ArticleIDPage.vue") },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "login", component: () => import("src/pages/auth/LoginPage.vue") },
      { path: "lostPassword", component: () => import("src/pages/auth/LostPasswordPage.vue") },
      { path: "lostPassword/:id", component: () => import("src/pages/auth/LostPasswordIDPage.vue") },
    ],
  },

  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    // beforeEnter: [checkIsLoggedIn],
    children: [
      { path: "", beforeEnter: [checkIsLoggedIn], component: () => import("src/pages/admin/AdminDashboardPage.vue") },
      {
        path: "website",
        beforeEnter: [checkIsLoggedIn], component: () => import("src/pages/admin/AdminWebsitePage.vue"),
      },
      {
        path: "article",
        beforeEnter: [checkIsLoggedIn], component: () => import("src/pages/admin/AdminArticlePage.vue"),
      },
      {
        path: "profil",
        beforeEnter: [checkIsLoggedIn], component: () => import("src/pages/admin/AdminProfilPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  }
];

export default routes;
